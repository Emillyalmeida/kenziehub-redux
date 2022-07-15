import React from "react";
import {
  render,
  screen,
  fireEvent,
  act,
  waitFor,
} from "@testing-library/react";
import Dashboard from "../../pages/Dashboard";

import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";

import api from "../../services/api";
import MockAdapter from "axios-mock-adapter";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const apiMock = new MockAdapter(api);

const store = mockStore({
  user: {
    user: {
      name: "john doe",
      course_module: "iniciante",
    },
    token: "12345",
  },
  techs: [
    {
      title: "title",
      status: "status1",

      id: "1234",
    },
  ],
});

const functionLogin = (a) => {
  return { type: "@techs/SETLIST", setList: a };
};

function fetchData() {
  return (dispatch) => {
    return apiMock.onGet("/users/").reply(
      200,
      dispatch(
        functionLogin([
          {
            title: "title",
            status: "status2",
            id: "1234",
          },
        ])
      )
    );
  };
}

const expectedActions = {
  type: "@techs/SETLIST",
  setList: [
    {
      title: "title",
      status: "status2",
      id: "1234",
    },
  ],
};

describe("Dashboard page", () => {
  test("should be able to show the techs", async () => {
    store.dispatch(fetchData());
    render(
      <Provider store={store}>
        <Dashboard />
      </Provider>
    );
    expect(screen.getByText("iniciante")).toBeInTheDocument();
    expect(screen.getByText("status1")).toBeInTheDocument();
    expect(store.getActions()).toContainEqual(expectedActions);
  });

  test("should be able to add techs", async () => {
    apiMock.onGet("/users/").reply(200, () => {});
    apiMock.onPost("/users/techs").reply(201, () => [{}]);

    render(
      <Provider store={store}>
        <Dashboard />
      </Provider>
    );
    const buttonOpenModal = screen.getByText("+");

    act(() => {
      fireEvent.click(buttonOpenModal);
    });

    const nameTech = screen.getByPlaceholderText("Digite o nome da tecnologia");
    const levelTech = screen.getByPlaceholderText("Selecione Nivel");

    act(() => {
      fireEvent.change(nameTech, { target: { value: "react" } });
      fireEvent.change(levelTech, { target: { value: "Avançado" } });
    });

    expect(nameTech).toHaveValue("react");
    expect(levelTech).toHaveValue("Avançado");
  });

  test("shoult to open modalInfo", async () => {
    render(
      <Provider store={store}>
        <Dashboard />
      </Provider>
    );

    const card = screen.getByText("status1");

    fireEvent.click(card);

    await waitFor(() =>
      expect(screen.getByText("Tecnologia Detalhes")).toBeInTheDocument()
    );
  });

  test("shoult to open modalInfo and to open deleteModal", () => {
    render(
      <Provider store={store}>
        <Dashboard />
      </Provider>
    );

    const card = screen.getByText("status1");

    act(() => {
      fireEvent.click(card);
    });

    const buttonDelete = screen.getByText("Excluir");

    act(() => {
      fireEvent.click(buttonDelete);
    });

    expect(
      screen.getByText("Tem certeza que deseja excluir essa tecnologia?")
    ).toBeInTheDocument();
  });
});

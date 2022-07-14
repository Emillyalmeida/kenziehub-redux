import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import Login from "../../pages/Login";

import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";

import api from "../../services/api";
import MockAdapter from "axios-mock-adapter";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const apiMock = new MockAdapter(api);

const store = mockStore({});

const functionLogin = (a) => {
  return { type: "@User/LogIn", payload: a };
};

function fetchData() {
  return (dispatch) => {
    return apiMock.onPost("/sessions").reply(200, dispatch(functionLogin("a")));
  };
}

const expectedActions = { type: "@User/LogIn", payload: "a" };

describe("Login page", () => {
  test("To able to signIn", async () => {
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );
    store.dispatch(fetchData());

    const fieldEmail = screen.getByPlaceholderText("Digite aqui seu email");
    const fieldPassword = screen.getByPlaceholderText("Digite aqui sua senha");

    const button = screen.getByText("Entrar");

    await act(() => {
      fireEvent.change(fieldEmail, { target: { value: "johndoe@email.com" } });
      fireEvent.change(fieldPassword, { target: { value: "123456789" } });
      fireEvent.click(button);
    });

    expect(fieldEmail).toHaveValue("johndoe@email.com");
    expect(fieldPassword).toHaveValue("123456789");
    expect(store.getActions()).toContainEqual(expectedActions);
  });
});

import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const store = mockStore({ user: {} });

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Switch: jest.fn(),
}));

test("renders learn react link", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});

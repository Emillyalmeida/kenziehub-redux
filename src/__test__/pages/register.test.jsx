import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import Register from "../../pages/Register";

import api from "../../services/api";
import MockAdapter from "axios-mock-adapter";
const apiMock = new MockAdapter(api);

const mockHistory = jest.fn(); //Para acessarmos se o push do history foi chamado
// criamos esse mock. O jest.fn() seria uma função vazia.

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistory,
  }),
}));

describe("Register Page", () => {
  test("To able to signUp", async () => {
    apiMock.onPost("/users").replyOnce(200, {});
    render(<Register />);
    const emailField = screen.getByPlaceholderText("Digite aqui seu email");
    const passwordField = screen.getByPlaceholderText("Digite aqui sua senha");
    const confirmPasswordField = screen.getByPlaceholderText(
      "Digite novamente sua senha"
    );
    const nameField = screen.getByPlaceholderText("Digite aqui seu nome");
    const selectModulo = screen.getByPlaceholderText("Selecione Modulo");

    const buttonElement = screen.getByText("Casdastrar");

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      fireEvent.change(emailField, { target: { value: "johndoe@email.com" } });
      fireEvent.change(passwordField, { target: { value: "123456789" } });
      fireEvent.change(confirmPasswordField, {
        target: { value: "123456789" },
      });
      fireEvent.change(nameField, { target: { value: "john doe" } });
      fireEvent.change(selectModulo, {
        target: { value: "Primeiro módulo (Introdução ao Frontend)" },
      });

      fireEvent.click(buttonElement);
    });

    expect(emailField).toHaveValue("johndoe@email.com");
    expect(passwordField).toHaveValue("123456789");
    expect(confirmPasswordField).toHaveValue("123456789");
    expect(nameField).toHaveValue("john doe");
    expect(selectModulo).toHaveValue(
      "Primeiro módulo (Introdução ao Frontend)"
    );
    expect(mockHistory).toHaveBeenCalledWith("/login");
  });

  test("To not able to signUp, cretentials invalid", async () => {
    apiMock.onPost("/users").replyOnce(401, {});
    render(<Register />);
    const emailField = screen.getByPlaceholderText("Digite aqui seu email");
    const passwordField = screen.getByPlaceholderText("Digite aqui sua senha");
    const confirmPasswordField = screen.getByPlaceholderText(
      "Digite novamente sua senha"
    );

    const buttonElement = screen.getByText("Casdastrar");

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      fireEvent.change(emailField, { target: { value: "johndoe" } });
      fireEvent.change(passwordField, { target: { value: "123456" } });
      fireEvent.change(confirmPasswordField, {
        target: { value: "" },
      });

      fireEvent.click(buttonElement);
    });

    expect(emailField).toHaveValue("johndoe");
    expect(passwordField).toHaveValue("123456");
    expect(confirmPasswordField).toHaveValue("");

    expect(screen.getByText("Email invalido")).toBeInTheDocument();
    expect(screen.getByText("Tamanho minimo 8 caracters")).toBeInTheDocument();
    expect(
      screen.getByText("Confimação de senha obrigatoria")
    ).toBeInTheDocument();
    expect(mockHistory).not.toHaveBeenCalledWith("/login");
  });
});

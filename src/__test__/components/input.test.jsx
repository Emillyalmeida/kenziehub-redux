import React from "react";
import { render, screen } from "@testing-library/react";
import Input from "../../components/Input";

describe("Component Inputs", () => {
  test("Input Email is render", () => {
    render(
      <Input
        label="E-mail"
        error=""
        name="Email"
        placeholder="Digite aqui seu email"
        register={() => {}}
      />
    );

    expect(screen.getByPlaceholderText("Digite aqui seu email")).toBeTruthy();
  });

  test("verify error message", () => {
    render(
      <Input
        label="E-mail"
        error="email invalido"
        name="Email"
        placeholder="Digite aqui seu email"
        register={() => {}}
      />
    );

    expect(screen.getByText("email invalido")).toBeInTheDocument();
  });
});

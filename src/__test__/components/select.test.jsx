import React from "react";
import { render, screen } from "@testing-library/react";
import Select from "../../components/Select";

describe("Component Select", () => {
  test("Testing select", () => {
    render(
      <Select
        label="Select Test"
        placeholder="Selecione Modulo"
        error=""
        register={() => {}}
        name="Test"
      >
        <option value="Primeiro módulo (Introdução ao Frontend)">
          Test option
        </option>
        <option value="Segundo módulo (Frontend Avançado)">
          Segundo módulo
        </option>
        <option value="Terceiro módulo (Introdução ao Backend)">
          Terceiro módulo
        </option>
        <option value="Quarto módulo (Backend Avançado)">Quarto módulo</option>
      </Select>
    );
    expect(screen.getByPlaceholderText("Selecione Modulo")).toBeTruthy();
    expect(screen.getByText("Select Test")).toBeTruthy();
    expect(screen.getByText("Test option")).toBeInTheDocument();
  });
});

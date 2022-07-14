import React from "react";
import { render, screen } from "@testing-library/react";
import CardTech from "../../components/CardTech";

describe("Component CardTech", () => {
  test("Check is CardTech is render", () => {
    render(
      <CardTech title="React" status="iniciante" id="1" isInfo={() => {}} />
    );

    expect(screen.getByText("React")).toBeTruthy();
    expect(screen.getByText("iniciante")).toBeTruthy();
  });
});

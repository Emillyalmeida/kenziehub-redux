import {
  LogoutUser,
  LoginUser,
} from "../../src/store/modules/userAuth/actions";

describe("Test KenzieHub", () => {
  const user = {
    user: {
      id: "4ccdd8a0-f02b-46ad-a275-384ca74b72a5",
      name: "John Doe",
      email: "johdoe@mail.com",
      course_module: "Terceiro módulo (Introdução ao Backend)",
      bio: "Lorem ipsum dolor emet",
      contact: "none",
      techs: [],
      works: [],
      created_at: "2022-07-15T11:53:04.281Z",
      updated_at: "2022-07-15T11:53:04.281Z",
      avatar_url: null,
    },
    token: "jhewofheurghiotji6yj",
  };

  const dispatch = (action) =>
    cy.window().its("store").invoke("dispatch", action);

  it("Enters in the landing page and enter in register", () => {
    cy.visit("/");
    cy.viewport(1440, 900);

    cy.contains("Cadastre-se").click();
  });
  it("Tries to register a new user", () => {
    cy.viewport(1440, 900);

    cy.intercept("POST", "/users", {
      statusCode: 201,
      body: {
        name: "John Doe",
        email: "johdoe@mail.com",
        id: 1,
      },
    }).as("new-user");

    cy.get("input[name=name]").type("John Doe");
    cy.get("input[name=email]").type("johdoe@mail.com");
    cy.get("input[name=password]").type("aA@12345");
    cy.get("input[name=confirmPassword]").type("aA@12345");
    cy.get("select").select("Terceiro módulo (Introdução ao Backend)");
    cy.get("button[type=submit]").click();

    cy.contains("Login");
  });

  it("Tries to signIn", () => {
    cy.viewport(1440, 900);

    cy.intercept("POST", "/sessions", {
      statusCode: 201,
      body: user,
    }).as("LoginUser");

    cy.get("input[name=email]").type("johdoe@mail.com");
    cy.get("input[name=password]").type("aA@12345");

    cy.get("button[type=submit]").click();

    dispatch(LoginUser(user));
    cy.contains("Tecnologias");
  });
});

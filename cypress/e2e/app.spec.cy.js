import {
  LogoutUser,
  LoginUser,
} from "../../src/store/modules/userAuth/actions";

import {
  addTechs,
  patchTechs,
  deleteTechs,
  setTechs,
} from "../../src/store/modules/techs/actions";

describe("Test KenzieHub", () => {
  const user = {
    user: {
      id: "4ccdd8a0-f02b-46ad-a275-384ca74b1457",
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

  const tech = {
    id: "ad85c1e7-9989-46e1-bc5b-49a24e7cb78",
    title: "react-native",
    status: "Avançado",
    user: { id: "4ccdd8a0-f02b-46ad-a275-384ca74b72a5" },
    created_at: "2022-07-15T14:35:54.394Z",
    updated_at: "2022-07-15T14:35:54.394Z",
  };

  const listTech = [];

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

    cy.intercept("GET", "/users/4ccdd8a0-f02b-46ad-a275-384ca74b1457", {
      statusCode: 200,
      body: [tech],
    });
    cy.contains("Tecnologias");
  });

  it("tries to add a new tech", () => {
    cy.viewport(1440, 900);
    cy.intercept("GET", "/users/4ccdd8a0-f02b-46ad-a275-384ca74b1457", {
      statusCode: 200,
      body: [tech],
    });

    cy.intercept("POST", "/users/techs", {
      statusCode: 201,
      body: tech,
    }).as("createTechs");

    cy.get(".kplSUb div button").click();

    cy.get("input[name=title]").type("react-native");
    cy.get("select").type("Avançado");

    cy.get(".cNAjwg").click();
    dispatch(addTechs([...listTech, tech]));
    cy.contains("react-native");
  });

  it("able to open modal info", () => {
    cy.viewport(1440, 900);

    cy.get(".eSISch li:first").click();

    cy.contains("Tecnologia Detalhes");
  });

  it("able to edit tech", () => {
    cy.viewport(1440, 900);
    cy.intercept("GET", "/users/4ccdd8a0-f02b-46ad-a275-384ca74b1457", {
      statusCode: 200,
      body: [tech],
    });

    cy.get("select").type("Iniciante");

    cy.get("footer button:first").click();

    tech.status = "Iniciante";
    cy.intercept("PUT", "/users/techs/ad85c1e7-9989-46e1-bc5b-49a24e7cb78", {
      statusCode: 200,
      body: tech,
    }).as("pacthTechs");

    dispatch(patchTechs([tech]));

    cy.get(".eSISch").contains("Iniciante");
  });

  it("should to able to delete tech", () => {
    cy.viewport(1440, 900);
    cy.intercept("GET", "/users/4ccdd8a0-f02b-46ad-a275-384ca74b1457", {
      statusCode: 200,
      body: [tech],
    });

    cy.get(".eSISch li:first").click();

    cy.get("footer button:last").click();

    cy.intercept("DELETE", "/users/techs/ad85c1e7-9989-46e1-bc5b-49a24e7cb78", {
      statusCode: 200,
    }).as("Techs");

    cy.contains("Tem certeza que deseja excluir essa tecnologia");

    cy.get(".css-cjkud5").click();

    dispatch(deleteTechs([]));

    cy.get("ul > h3").contains("Nenhuma tecnologia cadastrada");
  });

  it("able to logout", () => {
    cy.viewport(1440, 900);
    cy.intercept("GET", "/users/4ccdd8a0-f02b-46ad-a275-384ca74b1457", {
      statusCode: 200,
      body: [tech],
    });
    cy.wait(4000); //o tostify aparece na frente do botão impedindo o click por isso espera de 4s

    cy.get("nav button").contains("Sair").click();

    dispatch(LogoutUser({}));

    cy.contains("Login");
  });
});

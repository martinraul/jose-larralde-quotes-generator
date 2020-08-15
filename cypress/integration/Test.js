const URL = "http://localhost:3000/";

context("JOSE LARRALDE QUOTE GENERATOR", () => {
  before(() => {
    cy.visit(URL);
  });
  it("makes sure the APP deploys ok", () => {
    cy.get("#root")
      .find(".app")
      .get(".app")
      .find("nav")
      .get("#root")
      .find("nav")
      .children()
      .should("have.length", 2)
      .get("nav")
      .find("div ")
      .contains("Home")
      .get("nav")
      .find("div ")
      .contains("Bio")
      .get("img")
      .should("have.attr", "src")
      .should("include", "logo")
      .get(".app-content")
      .children()
      .should("have.length", 2)
      .get(".app-content")
      .find("h5")
      .get(".app-content")
      .find("button")
      .contains("GET QUOTE");
  });
  it("makes sure the component GETQUOTE works", () => {
    cy.get("h5").then(($h5) => {
      const txt = $h5.text();
      cy.get("button").click();
      cy.get("h5").should(($btn2) => {
        expect($btn2.text()).not.to.eq(txt);
      });
    });
    cy.get("h5").then(($h5) => {
      const txt = $h5.text();
      cy.get("button").click();
      cy.get("h5").should(($btn2) => {
        expect($btn2.text()).not.to.eq(txt);
      });
      cy.get("h5").then(($h5) => {
        const txt = $h5.text();
        cy.get("button")
          .click()
          .get("h5")
          .should(($btn2) => {
            expect($btn2.text()).not.to.eq(txt);
          });
      });
    });
  });
  it("makes sure the NAV LINK works", () => {
    cy.get("nav")
      .find("div ")
      .contains("Bio")
      .click()
      .get("div")
      .contains("About José Larralde:")
      .get("nav")
      .find("div ")
      .contains("Home")
      .click()
      .get(".app-content")
      .find("h5");
  });
});

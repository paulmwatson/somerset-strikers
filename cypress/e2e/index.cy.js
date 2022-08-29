import common from "/public/locales/en/common.json";

describe("home spec", () => {
  it("passes", () => {
    cy.visit("/").contains(common.home.h1);
    cy.visit("/").contains(common.home.intro);
    cy.visit("/").contains(common.home.register_your_interest);
  });
});

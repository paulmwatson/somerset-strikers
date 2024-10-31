import common from "/public/locales/en/common.json";

describe("fixtures spec", () => {
  it("passes", () => {
    cy.visit("/fixtures").contains(common.pages.play.fixtures);
    cy.location("pathname").should("eq", "/play/western-province-youth-league-2024-t4/u10/fixtures");
  });
});

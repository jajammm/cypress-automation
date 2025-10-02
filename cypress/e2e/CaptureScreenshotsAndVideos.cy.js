// Cypress automatically captures screenshots and videos while the test is have errors.

describe("Capture Screenshots and Videos", () => {
  it("Capture screenshots", () => {
    cy.visit("https://example.cypress.io");
    cy.screenshot("homepage");
    cy.get(".banner").screenshot();
  });
});

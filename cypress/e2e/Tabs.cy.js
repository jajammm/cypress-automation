describe("Tabs", () => {
  it("Handling child tabs", () => {
    cy.visit("https://the-internet.herokuapp.com/windows");
    cy.get(".example > a").invoke("removeAttr", "target").click();
    cy.url().should("include", "/windows/new");
    cy.contains("New Window").should("be.visible");
  });
});

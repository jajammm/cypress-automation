// Go

describe("Navigation", () => {
  it("go to dashboard", () => {
    cy.visit("https://demo.opencart.com/");
    cy.title().should("eq", "Your Store");

    cy.get(" li:nth-child(7) > a:nth-child(1)").click(); // Cameras page
    cy.get("div[id='content'] h2").should("have.text", "Cameras");

    cy.go("back");
    cy.title().should("eq", "Your Store"); // Back to home page

    cy.go("forward");
    cy.get("div[id='content'] h2").should("have.text", "Cameras"); // Forward to Cameras page
  });
});

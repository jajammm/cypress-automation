describe("Fixture", () => {
  let data;

  beforeEach(() => {
    cy.fixture("orangehrm").then((fixtureData) => {
      data = fixtureData;
    });
  });

  it("login", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get('input[name="username"]').type(data.username);
    cy.get('input[name="password"]').type(data.password);
    cy.get('button[type="submit"]').click();
    cy.contains("h6", data.expectedTitle).should("be.visible");
  });
});

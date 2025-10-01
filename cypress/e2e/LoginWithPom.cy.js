import Login from "../pageObjects/loginPage";

describe("pom", () => {
  it("login", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get("input[placeholder='Username']").type("Admin");
    cy.get("input[placeholder='Password']").type("admin123");
    cy.get("button[type='submit']").click();
    cy.url().should("include", "/dashboard");
    cy.contains("Dashboard").should("be.visible");
  });

  it("login with pom", () => {
    const login = new Login();
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    login.setUsername("Admin");
    login.setPassword("admin123");
    login.clickSubmit();
    login.verifyLoginSuccess();
  });
});

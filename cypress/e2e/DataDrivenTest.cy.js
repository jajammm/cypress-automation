describe("Data Driven Test", () => {
  it("Login Data Driven Test", () => {
    cy.fixture("orangehrm2").then((data) => {
      data.forEach((user) => {
        cy.visit(
          "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
        );
        cy.get("input[placeholder='Username']").type(user.username);
        cy.get("input[placeholder='Password']").type(user.password);
        cy.get("button[type='submit']").click();

        if (user.username === "admin" && user.password === "admin123") {
          cy.contains("h6", user.expected).should("be.visible");
          cy.wait(10000);
          cy.get(".oxd-userdropdown-tab").click();
          cy.contains("Logout").click();
        } else {
          cy.contains(user.expected).should("be.visible");
        }
      });
    });
  });
});

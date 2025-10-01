class Login {
  setUsername(username) {
    cy.get('input[name="username"]').type(username);
  }

  setPassword(password) {
    cy.get('input[name="password"]').type(password);
  }

  clickSubmit() {
    cy.get('button[type="submit"]').click();
  }

  verifyLoginSuccess() {
    cy.url().should("include", "/dashboard");
    cy.contains("Dashboard").should("be.visible");
  }
}

export default Login;

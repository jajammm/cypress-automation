class Login {
  txtUsername = 'input[placeholder="Username"]';
  txtPassword = 'input[placeholder="Password"]';
  btnSubmit = 'button[type="submit"]';

  setUsername(username) {
    cy.get(this.txtUsername).type(username);
  }

  setPassword(password) {
    cy.get(this.txtPassword).type(password);
  }

  clickSubmit() {
    cy.get(this.btnSubmit).click();
  }

  verifyLoginSuccess() {
    cy.url().should("include", "/dashboard");
    cy.contains("Dashboard").should("be.visible");
  }
}

export default Login;

describe("Assertions Demo", () => {
  it("Implicit assertions", () => {
    // should & aclend

    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    cy.url()
      .should("include", "orangehrmlive.com")
      .and(
        "eq",
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
      )
      .and("contain", "orangehrm")
      .and("not.contain", "greenhrm");

    cy.title()
      .should("include", "Orange")
      .and("eq", "OrangeHRM")
      .and("contain", "HRM")
      .and("not.contain", "GreenHRM");

    cy.get(".orangehrm-login-branding > img").should("be.visible").and("exist");

    cy.xpath("//a").should("have.length", 5);

    cy.get("input[placeholder='Username']").type("Admin");
    cy.get("input[placeholder='Username']").should("have.value", "Admin");
  });

  it("Explicit assertions", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    cy.get("input[placeholder='Username']").type("Admin");
    cy.get("input[placeholder='Password']").type("admin123");
    cy.get("button[type='submit']").click();

    let expName = "manda user";
    cy.get(".oxd-userdropdown-name").then((x) => {
      let actName = x.text();

      //   BDD Style
      expect(actName).to.equal(expName);
      // expect(actName).to.not.equal(expName);

      //   TDD Style
      assert.equal(actName, expName);
      // assert.notEqual(actName, expName);
    });
  });
});

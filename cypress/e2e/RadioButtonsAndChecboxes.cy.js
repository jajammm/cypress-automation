describe("Radio Buttons and Checkboxes", () => {
  it("Checking radio button", () => {
    cy.visit("https://qa-automation-practice.netlify.app/radiobuttons.html");

    // Check visibility
    cy.get("input#radio-button1").check().should("be.visible");
    cy.get("input#radio-button2").check().should("be.visible");

    cy.get("input#radio-button1").check().should("be.checked");
    cy.get("input#radio-button2").should("not.be.checked");

    cy.get("input#radio-button2").check().should("be.checked");
    cy.get("input#radio-button1").should("not.be.checked");
  });

  it("Checking checkbox", () => {
    cy.visit("https://qa-automation-practice.netlify.app/checkboxes.html");

    // Check visibility
    cy.get("input#checkbox1").check().should("be.visible");

    // Select single checkbox
    cy.get("input#checkbox1").check().should("be.checked");

    // Deselect single checkbox
    cy.get("input#checkbox1").uncheck().should("not.be.checked");

    // Select multiple checkboxes
    cy.get("input[type='checkbox']").check().should("be.checked");

    // Deselect multiple checkboxes
    cy.get("input[type='checkbox']").uncheck().should("not.be.checked");

    // Select first checkbox
    cy.get("input[type='checkbox']").first().check().should("be.checked");
    // Select last checkbox
    cy.get("input[type='checkbox']").last().check().should("be.checked");
  });
});

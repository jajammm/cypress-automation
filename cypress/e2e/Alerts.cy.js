describe("Alerts", () => {
  // Alert have some text and only one button - OK
  it("should display an alert when the button is clicked", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get("button[onclick='jsAlert()']").click();
    cy.on("window:alert", (text) => {
      expect(text).to.equal("I am a JS Alert");
    });
    cy.get("#result").should("have.text", "You successfully clicked an alert");
  });

  //   Confirm alert
  it("should display a confirm alert when the button is clicked", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get("button[onclick='jsConfirm()']").click();
    cy.on("window:confirm", (text) => {
      expect(text).to.equal("I am a JS Confirm");
    });

    // Cypress automatically clicks "OK" in confirm alert

    cy.get("#result").should("have.text", "You clicked: Ok");
  });

  //   Confirm alert - Cancel
  it("should display a confirm alert when the button is clicked", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get("button[onclick='jsConfirm()']").click();
    cy.on("window:confirm", (text) => {
      expect(text).to.equal("I am a JS Confirm");
    });

    cy.on("window:confirm", () => false); // Clicks "Cancel" in confirm alert

    // Cypress automatically clicks "OK" in confirm alert

    cy.get("#result").should("have.text", "You clicked: Cancel");
  });

  //   Prompt alert
  it("should display a prompt alert when the button is clicked", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.window().then((win) => {
      cy.stub(win, "prompt").returns("Cypress Test");
    });
    cy.get("button[onclick='jsPrompt()']").click();
    cy.get("#result").should("have.text", "You entered: Cypress Test");
  });

  it("should display a prompt alert when the button is clicked", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get("button[onclick='jsPrompt()']").click();
    cy.on("command:prompt", () => false); // Clicks "Cancel" in prompt alert
    cy.get("#result").should("have.text", "You entered: null");
  });

  //   Authentication Alert
  it("should handle authentication alert", () => {
    cy.visit("https://the-internet.herokuapp.com/basic_auth", {
      auth: {
        username: "admin",
        password: "admin",
      },
    });
    cy.get("div[class='example'] p").should(
      "have.contain",
      "Congratulations! You must have the proper credentials."
    );
  });
});

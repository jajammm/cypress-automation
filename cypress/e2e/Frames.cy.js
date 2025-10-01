import "cypress-iframe";

describe("Frames", () => {
  it("Handling iFrame", () => {
    cy.visit("https://the-internet.herokuapp.com/iframe");

    const iframe = cy
      .get("#mce_0_ifr")
      .its("0.contentDocument.body")
      .should("be.visible")
      .then(cy.wrap);

    iframe.clear().type("Hello, World!");
    cy.get("button[aria-label='Bold']").click();
  });

  it("Handling iFrame Custom Commands", () => {
    cy.visit("https://the-internet.herokuapp.com/iframe");

    cy.getIframe("#mce_0_ifr").clear().type("Hello, World! {ctrl + a}");
    cy.get("button[aria-label='Bold']").click();
  });

  it("Handling iFrame with plugin", () => {
    cy.visit("https://the-internet.herokuapp.com/iframe");
    cy.frameLoaded("#mce_0_ifr");
    cy.iframe("#mce_0_ifr").clear().type("Hello, World! {ctrl + a}");
    cy.get("button[aria-label='Bold']").click();
  });
});

describe("Handle dropdowns", () => {
  it.skip("Dropdown with select", () => {
    cy.visit("https://www.zoho.com/commerce/free-demo.html");
    cy.get("#zcf_users_1")
      .select("Yes, I currently sell online")
      .should("have.value", "Yes, I currently sell online");
  });

  it.skip("Dropdown without select", () => {
    cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");
    cy.get("#select2-billing_country-container").click();
    cy.get(".select2-search__field").type("Indonesia{enter}");
    cy.get("#select2-billing_country-container").should(
      "have.text",
      "Indonesia"
    );
  });

  it.skip("Dropdown with auto suggestions", () => {
    cy.visit("http://wikipedia.org/");
    cy.get("#searchInput").type("Jakarta");
    cy.get(".suggestion-title").contains("Jakarta MRT").click();
  });

  it("Dynamic Dropdown", () => {
    cy.visit("https://www.google.com/");
    cy.get("[name='q']").type("cypress automation");
    cy.wait(2000);
    cy.get("div.wM6W7d>span").should("have.length", 13);
    cy.get("div.wM6W7d>span").each(($el, index, $list) => {
      if ($el.text() === "cypress automation tutorial") {
        cy.wrap($el).click();
      }
    });
    cy.get("[name='q']").should("have.value", "cypress automation tutorial");
  });
});

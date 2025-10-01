// Hooks
// Before, After, BeforeEach, AfterEach

// Tags
// skip, only

describe("Hooks and Tags", () => {
  before(() => {
    cy.log("launching app");
  });
  after(() => {
    cy.log("closing app");
  });
  beforeEach(() => {
    cy.log("login to app");
  });
  afterEach(() => {
    cy.log("logout from app");
  });

  it("searching", () => {
    cy.log("searching test");
  });

  it("advance searching", () => {
    cy.log("advance searching test");
  });

  it("listing product", () => {
    cy.log("listing product test");
  });
});

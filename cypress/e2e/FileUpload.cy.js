// Make sure path of the file is correct

describe("File Upload", () => {
  it("Single File Upload", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#file-upload").selectFile("cypress/fixtures/example.json");
    cy.get("#file-submit").click();
    cy.get("h3").should("have.text", "File Uploaded!");
  });

  it("File Upload - Rename", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#file-upload").selectFile({
      contents: Cypress.Buffer.from("file contents"),
      filePath: "cypress/fixtures/example.json",
      fileName: "myfile.json",
    });
    cy.get("#file-submit").click();
    cy.get("h3").should("have.text", "File Uploaded!");
  });

  it("File Upload - Drag and Drop", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#drag-drop-upload").selectFile("cypress/fixtures/example.json", {
      action: "drag-drop",
    });
    cy.get(
      "div[class='dz-preview dz-file-preview dz-processing dz-success dz-complete'] div[class='dz-details'] span"
    ).should("have.text", "example.json");
  });

  it("Multiple File Upload", () => {
    cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
    cy.get("#filesToUpload").selectFile([
      "cypress/fixtures/orangehrm.json",
      "cypress/fixtures/orangehrm2.json",
    ]);
    cy.get("#fileList > li").should(
      "contain.text",
      "orangehrm.json" && "orangehrm2.json"
    );
  });

  it.skip("File Upload - Shadow DOM", () => {
    cy.visit(
      "https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm"
    );
    cy.get(".smart-browse-input", { includeShadowDom: true }).selectFile(
      "cypress/fixtures/example.json"
    );
    cy.get(".smart-item-name", { includeShadowDom: true }).should(
      "have.text",
      "example.json"
    );
  });
});

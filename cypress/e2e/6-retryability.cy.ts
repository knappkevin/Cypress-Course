Cypress.config("defaultCommandTimeout", 16000);

describe("Retry ability demo", () => {
    it("Visit with delay", () => {
        cy.visit("/loaddelay", {timeout: 30000})
        cy.contains("Button with Dynamic ID").should("have.text", "Button with Dynamic ID");
    });
    it("Client delay button", () => {
        cy.visit("/clientdelay");
        cy.get("#ajaxButton").click();
        cy.get(".bg-success").should("have.text", "Data calculated on the client side.");
    });

    it("Wait for progress bar assertion", () => {
        cy.visit("/progressbar")
        cy.get("#startButton").click();
        cy.get("#progressBar", {timeout: 30000}).should("have.text", "100%");
    });
});
describe('JS alerts', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("theInternet")}/javascript_alerts`);
    });
    it('JS alert', () => {
        cy.contains("button", "Click for JS Alert").click();
        cy.on("window:alert", (message) => {
            expect(message).to.be.equal("I am a JS Alert");
        })
        cy.on("window:confirm", () => true)
        cy.get("p#result").should("have.text", "You successfully clicked an alert");
    });
    it('JS confirm(accept)', () => {
        cy.contains("button", "Click for JS Confirm").click();
        cy.on("window:confirm", (message) => {
            expect(message).to.be.equal("I am a JS Confirm");
        })
        cy.on("window:confirm", () => true)
        cy.get("p#result").should("have.text", "You clicked: Ok");
    });
    it('JS confirm(cancel)', () => {
        cy.contains("button", "Click for JS Confirm").click();
        cy.on("window:confirm", (message) => {
            expect(message).to.be.equal("I am a JS Confirm");
        })
        cy.on("window:confirm", () => false)
        cy.get("p#result").should("have.text", "You clicked: Cancel");
    });
    it('JS Prompt', () => {
        cy.window().then((window) => {
            cy.stub(window, "prompt").returns("This is a hello world from the prompt alert");
            cy.contains("button", "Click for JS Prompt").click();
        });
        cy.get("p#result").should('have.text', "You entered: This is a hello world from the prompt alert");
    });
});


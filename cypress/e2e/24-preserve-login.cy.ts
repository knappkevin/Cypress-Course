Cypress.session.clearAllSavedSessions();

describe('preseve login', () => {
    beforeEach(() => {
        cy.session('mySession', () => {
            cy.visit(`${Cypress.env("demoQA")}/login`);
            cy.get("#userName").type("test");
            cy.get("#password").type("Test1234*");
            cy.get("#login").click();
            cy.url().should("contain", "profile");
        });
    });
    it('Check if session was saved', () => {
        cy.visit(`${Cypress.env("demoQA")}/login`);
        cy.get('#loading-label').should("have.text", "You are already logged in. View your profile.")
    });
});
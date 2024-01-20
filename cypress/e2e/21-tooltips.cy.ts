describe('Tooltips describe', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/tool-tips`);
    });
    it('Tooltip demo', () => {
        cy.get("#toolTipButton").realHover(); // to make the tooltip show 
        cy.get('.tooltip-inner').should("have.text", "You hovered over the Button");
    });
    it('Tooltip demo of link tooltip', () => {
        cy.contains("a", "Contrary").realHover(); // to make the tooltip show 
        cy.get('.tooltip-inner').should("have.text", "You hovered over the Contrary");
    });

});
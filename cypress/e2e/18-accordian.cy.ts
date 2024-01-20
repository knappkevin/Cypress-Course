describe('Accordian', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/accordian`);
    });
    it('Default accordion validation example', () => {
        cy.get("div#section2Heading").click();
        //checking if the first description was hidden correctly
        cy.get("#section1Heading").next().should("have.css", "display", "none");
        //checking if second descr is displayed
        cy.get("#section2Heading").next().should("have.css", "display", "block").and("have.class", "show");
    });
});
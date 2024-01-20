describe('drag and drop describe', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/droppable`);
    });
    it('drag drop demo', () => {
        cy.get("#draggable").drag("#droppable", { force: true });
    });
});
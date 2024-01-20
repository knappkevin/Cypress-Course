describe('Environment Variable Demo', () => {
    it('Demo', () => {
        cy.log(`Print env var val: ${Cypress.env("demoVar")}`)
    });
});
describe('Dealing with links that opens a new tab', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/links`);
    });
    it('First approach, not click on link', () => {
        cy.get("#simpleLink").should("have.attr", "href", "https://demoqa.com")
        cy.get("#simpleLink").should("have.attr", "target", "_blank")
        //this makes sure it has the correct attributes such as _blank to open in new tab
    });
    it('Second aproach, removing the target', () => {
        cy.get("#simpleLink").invoke("removeAttr", "target").click();
        cy.url().then((url) => {
            expect(url).to.be.equal("https://demoqa.com/")
        });
        //cypress cannot test for new tabs so this makes it open in the same tab
    });
});

describe('Intercepting API(SPYING) requests after clicking on a button', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/links`);
        cy.intercept("GET", "https://demoqa.com/created").as("linkStatus");
    });
    it('Intercept the 201 button', () => {
        cy.get("a#created").click();
        cy.wait("@linkStatus").then((request) => {
            cy.log(`The intercept requested: ${request}`);
            expect(request.response.statusCode).to.be.equal(201);
            expect(request.response.statusMessage).to.be.equal("Created");
        });
    });
});
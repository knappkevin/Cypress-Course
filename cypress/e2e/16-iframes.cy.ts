describe('Iframe example', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/nestedframes`);
    });
    it('Simple and nested iframe', () => {
        cy.get("#frame1").then(function ($iframe) {
            const $body = $iframe.contents().find("body");
            cy.wrap($body).should("have.text", "Parent frame"); //wrap so body var isnt static const
            cy.wrap($body).find("iframe").then(function($childIframe) {
                const $childBody = $childIframe.contents().find("body");
                cy.wrap($childBody).find("p").should("have.text", "Child Iframe"); //wrap so body var isnt static const
            });
        });
    });
});

describe('Typing on an Iframe using the internet app', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("theInternet")}/iframe`);
    });
    it('Iframedemo', () => {
        cy.get("#mce_0_ifr").then(($iframe) => {
            const $body = $iframe.contents().find("body");
            cy.wrap($body).find('p').type("{selectAll}{del}Hello World");
        });
        cy.get("#mce_0_ifr").then(($iframe) => {
            const $body = $iframe.contents().find("body");
            cy.wrap($body).find('p').should("have.text", "Hello World");
        })
    });
});
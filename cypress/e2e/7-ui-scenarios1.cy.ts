describe('Click challenge', () => {
    beforeEach(() => {
        cy.visit("/click");
    });
    it('Class assertions', () => {
        cy.get("#badButton").click().should("have.class", "btn-success");
    });
    it('Background assertion', () => {
        cy.get("#badButton").click().should("have.css", "background-color", "rgb(40, 167, 69");
    });
});

//npm install -D cypress-real-events
//plugin for hover emulation
//in cypress/support/e2e.ts
//import 'cypress-real-events/support';
//in tsconfig.json for typescript users
//    "types": ["cypress", "cypress-real-events"]
describe('Hover challenge', () => {
    beforeEach(() => {
        cy.visit("/mouseover");
    });
    it('Hover with real hover elements', () => {
        cy.get(".text-primary").realHover().should("have.css", "text-color?", "rgb(?)");
    });

});

describe('Dynamic table challenge', () => {
    beforeEach(() => {
        cy.visit("/dynamictable")
    });
    it('Chrome CPU test', () => {
        cy.get(`div[role="row"] span`).each(($cell) => {
            if($cell.text().includes("Chrome")) {
                let chromeRowValues: string[] = [];
                chromeRowValues.push($cell.next().text());
                chromeRowValues.push($cell.next().next().text());
                chromeRowValues.push($cell.next().next().next().text());
                chromeRowValues.push($cell.next().next().next().next().text());
                cy.log("Chrome row values", chromeRowValues);
                chromeRowValues.forEach((chromeValue) => {
                    if(chromeValue.includes("%")) {
                        cy.log(chromeValue);
                        cy.get(".bg-warning").should("have.text", `Chrome CPU: ${chromeValue}`);
                    }
                });
            }
        });
    });
    
});
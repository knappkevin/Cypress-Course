let img: HTMLImageElement;
describe('Broken images with Demo QA', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/broken`);
    });
    it('Not broken image assertion', () => {
        cy.get('div > img[src="/images/Toolsqa.jpg"]').should("be.visible").and(($img) => {
            img = $img[0] as unknown as HTMLImageElement;
            expect(img.naturalWidth).to.be.greaterThan(0);
        });
    });
    it('Broken image assertion', () => {
        cy.get('div > img[src="/images/Toolsqa_1.jpg"]').should("be.visible").and(($img) => {
            img = $img[0] as unknown as HTMLImageElement;
            expect(img.naturalWidth).to.be.greaterThan(0); //should fail
        });
    });
});

describe('grabbing first or last images', () => {
    it('Grabbing the last (or first) image on a page', () => {
        cy.get("div.example img")
            .last()
            //.first()
            .should("be.visible")
            .and(($img) => {
                //Skip TS error, it is working
                img = $img[0] as unknown as HTMLImageElement ;
                expect(img.naturalWidth).to.be.greaterThan(0);
    
            })
    });
});

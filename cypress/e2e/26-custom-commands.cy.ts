import { LoginPage } from "../pages/Login";
import { ProfilePage } from "../pages/Profile";

describe('custom commands', () => {
    beforeEach(() => {
        LoginPage.visit();
    });
    it('User logs in', () => {
        cy.login("test", "Test1234*")
        cy.url().should("contain", "profile");
        ProfilePage.headerElement.should("have.text", "Profile");
        cy.get("#userName-value").should("have.text", "test");
        LoginPage.userElement.should("have.text", "test");
    });
    it('Wrong User', () => {
        cy.login("wrong", "wrong")
        cy.url().should("not.contain", "profile");
        LoginPage.invalidLoginMessageElement.should("have.text", "Invalid username or password!")
        LoginPage.headerElement.should("have.text", "Login");
    });
});
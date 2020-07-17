import * as basePage from "../support/pageObjects/BasePage"
import * as config from "../fixtures/ui_config.json"

describe("our first test",() => {
    before("Login to app", () => {
        cy.login(Cypress.env('username'), Cypress.env('password'))
    })
    it("first test", () => {
        //test
        //you can read the testdata from config like "config.name", "config.email"
    })
    after("after test", () => {
        //after test
    })
})
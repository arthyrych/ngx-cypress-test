/// <reference types="cypress" />


describe("first test suite", () => {

    beforeEach("code for every test", () => {

        cy.visit('/')

    })
    

    it("types of locators", () => {

        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        // 1) by Tag Name
        cy.get('input')

        // 2) by ID
        cy.get('#inputEmail1')

        // 3) by Class name
        cy.get('.input-full-width')

        // 4) by Attribute name
        cy.get('[placeholder]')

        // 5) by Attribute name with value
        cy.get('[placeholder="Email"]')

        // 6) by Class value
        cy.get('[class="input-full-width size-medium shape-rectangle"]')

        // 7) by Tag name and Attribute with value
        cy.get('input[placeholder="Email"]')

        // 8) by two different Attributes
        cy.get('[placeholder="Email"][fullwidth]')

        // 9) by Tag Name, Attribute with value, ID and class name
        cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')

        // 10) the most recommended way by Cypress (creating test attributes)
        cy.get('[data-cy="imputEmail1"]')

    })

})
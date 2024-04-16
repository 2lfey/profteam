// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('login', (role) => {
    let login = 'admin'

    switch (role) {
        case 'admin': login = 'testerAdmin'; break
        case 'student': login = 'ilfey'; break
        case 'employer': login = 'testerEmployer'; break
        case 'institution': login = 'testerInstitution'; break
        default: login = 'admin'; break
    }


    cy.fixture('auth').then((auth) => {
        cy.log("Open login page: " + auth.login_url)
        cy.visit(auth.login_url)

        cy.log("Type login: " + login)
        cy.get('.form-input--text')
            .type(login)

        cy.log("Type password: " + auth.password)
        cy.get('.form-input--password')
            .type(auth.password)

        cy.log("Click login button")
        cy.get(':nth-child(3) > .button')
            .click()

        cy.log("Check url")
        cy.url().should("include", "/account/main")
    })
})
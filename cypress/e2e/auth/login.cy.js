import { faker } from '@faker-js/faker'

describe('Login', () => {
  it('Login to admin account', () => {
    cy.fixture('auth').then((auth) => {

      cy.log("Open login page: " + auth.login_url)
      cy.visit(auth.login_url)

      cy.log("Type login: " + auth.login)
      cy.get('.form-input--text')
        .type(auth.login)

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

  it("Login with wrong credentials", () => {
    cy.fixture('auth').then((auth) => {

      cy.log("Open login page: " + auth.login_url)
      cy.visit(auth.login_url)

      const fakeUserName = faker.internet.userName()

      cy.log("Type login: " + fakeUserName)
      cy.get('.form-input--text')
        .type(fakeUserName)

      const fakePassword = faker.internet.password({ length: 10 })

      cy.log("Type password: " + fakePassword)
      cy.get('.form-input--password')
        .type(fakePassword)

      cy.log("Click login button")
      cy.get(':nth-child(3) > .button')
        .click()

      cy.log("Check error message")
      cy.get('.form-error > span').should("exist")
    })
  })
})
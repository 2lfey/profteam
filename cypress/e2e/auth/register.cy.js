import { faker, fakerRU } from '@faker-js/faker'

describe('Register', () => {

  it('Register new account', () => {
    cy.fixture('auth').then((auth) => {

      cy.log("Open register page: " + auth.register_url)
      cy.visit(auth.register_url)
      
      cy.wait(100)

      const fakeUserName = faker.string.alpha(6)

      cy.log("Type login: " + fakeUserName)
      cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text')
        .type(fakeUserName)

      const fakeEmail = faker.internet.email()

      cy.log("Type email: " + fakeEmail)
      cy.get('.form-input--email')
        .type(fakeEmail)

      const fakePassword = faker.internet.password({ pattern: /[A-Za-z0-9]+/g, length: 10 })

      cy.log("Type password: " + fakePassword)
      cy.get(':nth-child(3) > .form-control--medium > .form-input--password')
        .type(fakePassword)

      cy.log("Type confirm password: " + fakePassword)
      cy.get(':nth-child(4) > .form-control--medium > .form-input--password')
        .type(fakePassword)

      cy.log("Click register button")
      cy.get(':nth-child(4) > .button')
        .click()

      const fakeLastName = fakerRU.person.lastName('male')

      cy.log("Type lastName: " + fakeLastName)
      cy.get('[style=""] > :nth-child(1) > .form-control--medium > .form-input--text')
        .type(fakeLastName)

      const fakeFirstName = fakerRU.person.firstName('male')

      cy.log("Type firstName: " + fakeFirstName)
      cy.get(':nth-child(2) > .form-control--medium > .form-input--text')
        .type(fakeFirstName)

      const fakeMiddleName = fakerRU.person.middleName('male')

      cy.log("Type middleName: " + fakeMiddleName)
      cy.get(':nth-child(3) > .form-control--medium > .form-input--text')
        .type(fakeMiddleName)

      cy.log("Click register button")
      cy.get('.form__buttons > :nth-child(3)')
        .click()

      cy.log("Check page title")
      cy.get('.page-title').contains("Личный кабинет")

    })
  })


  it("Register existing account", () => {
    cy.fixture('auth').then((auth) => {

      cy.log("Open register page: " + auth.register_url)
      cy.visit(auth.register_url)

      cy.wait(100)

      cy.log("Type login: " + auth.login)
      cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text')
        .type(auth.login)

      cy.log("Type email: " + auth.email)
      cy.get('.form-input--email')
        .type(auth.email)

      cy.log("Type password: " + auth.password)
      cy.get(':nth-child(3) > .form-control--medium > .form-input--password')
        .type(auth.password)

      cy.log("Type confirm password: " + auth.password)
      cy.get(':nth-child(4) > .form-control--medium > .form-input--password')
        .type(auth.password)

      cy.log("Click register button")
      cy.get(':nth-child(4) > .button')
        .click()

      cy.wait(100)

      cy.log("Check error message")
      cy.get(':nth-child(1) > .form-error')
        .should("exist")

      cy.log("Check error message")
      cy.get(':nth-child(1) > .form-error')
        .should("exist")
    })
  })
})
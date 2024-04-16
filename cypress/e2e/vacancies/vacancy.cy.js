import { fakerRU } from '@faker-js/faker'

describe('Vacancie', () => {
  it('Create vacancie', () => {
    cy.log('Login to employer account')
    cy.login('employer')

    cy.fixture('vacancies').then((vacancies) => {
      cy.log('Open create vacancie page')
      cy.visit(vacancies.account_vacancies_url)

      cy.log("Click create button")
      cy.get('[data-v-21f0eb9c=""][data-v-4849dea2=""] > .vacancies-block > .vacancies-block__filters-wrapper > .button')
        .click()

      const fakeJobTitle = fakerRU.person.jobTitle()

      cy.log("Type title")
      cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--')
        .type(fakeJobTitle)

      cy.log("Open types of employment")
      cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(3) > .form-select > :nth-child(2) > .form-select__selected')
        .click()

      cy.log("Select type of employment")
      cy.get('.form-select__items > :nth-child(2)')
        .click()

      const fakeRequirements = fakerRU.lorem.paragraphs()

      cy.log("Type requirements")
      cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(5) > .form-control > .form-area')
        .type(fakeRequirements)

      const fakeResponsibilities = fakerRU.lorem.paragraphs()

      cy.log("Type responsibilities")
      cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(6) > .form-control > .form-area')
        .type(fakeResponsibilities)

      cy.log("Click create button")
      cy.get('.vacancy-add-form-wrapper > .form > .form__buttons > .buttons > .button')
        .click()

      cy.log("Check created vacancie")
      cy.get(':nth-child(1) > .vacancy-item__info-wrapper > .vacancy-header > .vacancy-header__name')
        .contains(fakeJobTitle)
    })
  })

  it("Create empty vacancie", () => {
    cy.log('Login to employer account')
    cy.login('employer')

    cy.fixture('vacancies').then((vacancies) => {
      cy.log('Open create vacancie page')
      cy.visit(vacancies.account_vacancies_url)

      cy.log("Click create button")
      cy.get('[data-v-21f0eb9c=""][data-v-4849dea2=""] > .vacancies-block > .vacancies-block__filters-wrapper > .button')
        .click()

      cy.log("Check button disabled")
      cy.get('.vacancy-add-form-wrapper > .form > .form__buttons > .buttons > .button')
        .should('be.disabled')
    })
  })
})
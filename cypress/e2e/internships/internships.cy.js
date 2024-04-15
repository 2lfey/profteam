import { fakerRU } from "@faker-js/faker"

describe("Internships", () => {

    it('Create internship', () => {
        cy.log('Login to admin account')
        cy.login('employer')

        cy.fixture('internships').then((internships) => {
            cy.log('Open create intership page')
            cy.visit(internships.account_internships_url)

            cy.log("Click create button")
            cy.get('[data-v-b4b9d629=""][data-v-4849dea2=""] > .vacancies-block > .vacancies-block__filters-wrapper > .button')
                .click()

            const fakeJobTitle = fakerRU.person.jobTitle()

            cy.log("Type title")
            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--')
                .type(fakeJobTitle)

            const now = Date.now()

            const today = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`

            cy.log("Type date start: " + today)
            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(4) > .form-control--responsive > .form-input--date')
                .type(today)

            cy.log("Type date end")
            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(5) > .form-control--responsive > .form-input--date')
                .type("2022-01-01")
            
            const fakeRequirements = fakerRU.lorem.paragraphs()

            cy.log("Type requirements: " + fakeRequirements)
            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(6) > .form-control > .form-area')
                .type(fakeRequirements)

            const fakeResponsibilities = fakerRU.lorem.paragraphs()

            cy.log("Type responsibilities: " + fakeResponsibilities)
            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(7) > .form-control > .form-area')
                .type(fakeResponsibilities)
            
            cy.log("Click create button")
            cy.get('.vacancy-add-form-wrapper > .form > .form__buttons > .buttons')
                .click()
        })
    })
})
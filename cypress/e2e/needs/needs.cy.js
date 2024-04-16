import { fakerRU } from "@faker-js/faker"

describe('Needs', () => {
    it("Create need", () => {
        cy.log('Response to avaible vacancie')
        cy.login('employer')

        cy.fixture('needs').then((needs) => {

            cy.log('Open create vacancie page')
            cy.visit(needs.account_needs_url)

            cy.log("Click create button")
            cy.get('.needs-block__filters-wrapper > .button')
                .click()

            const fakeNeedTitle = fakerRU.person.jobTitle()

            cy.log("Type title: " + fakeNeedTitle)
            cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--text')
                .type(fakeNeedTitle)
            
            const fakeResponsibilities = fakerRU.lorem.paragraphs()

            cy.log("Type responsibilities: " + fakeResponsibilities)
            cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(3) > .form-control > .form-area')
                .type(fakeResponsibilities)


            const fakeRequirements = fakerRU.lorem.paragraphs()

            cy.log("Type requirements: " + fakeRequirements)
            cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(4) > .form-control > .form-area')
                .type(fakeRequirements)

            cy.log("Click create button")
            cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > .form__buttons > .button')
                .click()
            
            cy.log("Check created need")
            cy.get(':nth-child(1) > .need-item__info-wrapper > .need-header > .need-header__name')
                .contains(fakeNeedTitle)
        })
    })

    it("Create empty need", () => {
        cy.log('Response to avaible vacancie')
        cy.login('employer')

        cy.fixture('needs').then((needs) => {

            cy.log('Open create vacancie page')
            cy.visit(needs.account_needs_url)

            cy.log("Click create button")
            cy.get('.needs-block__filters-wrapper > .button')
                .click()

            cy.log("Click create button")
            cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > .form__buttons > .button')
                .should("be.disabled")
        })
    })
})
describe('Vacancie', () => {
    it("Response to vacancie", () => {
        cy.log('Login as student')
        cy.login('student')

        cy.fixture('vacancies').then((vacancies) => {

            cy.log('Open create vacancie page')
            cy.visit(vacancies.vacancies_url)

            cy.log("Click first enabled response button")
            cy.get('.vacancy-item__info-wrapper > .vacancy-item__footer-wrapper > .vacancy-footer > .vacancy-footer__button-wrapper > .button__background-color-green')
                .eq(0)
                .click()
        })
    })

    it("Response to disabled vacancie", () => {
        cy.log('Login as student')
        cy.login('student')

        cy.fixture('vacancies').then((vacancies) => {

            cy.log('Open create vacancie page')
            cy.visit(vacancies.vacancies_url)

            cy.log("Click first disabled response button")
            cy.get('.vacancy-item__info-wrapper > .vacancy-item__footer-wrapper > .vacancy-footer > .vacancy-footer__button-wrapper > .button__background-color-light-blue')
                .eq(0)
                .should('be.disabled')
        })
    })

    it("Eployer can't response to vacancie", () => {
        cy.log('Login as employer')
        cy.login('employer')

        cy.fixture('vacancies').then((vacancies) => {

            cy.log('Open create vacancie page')
            cy.visit(vacancies.vacancies_url)

            cy.log("Check non exist response button")
            cy.get('.vacancy-item__info-wrapper > .vacancy-item__footer-wrapper > .vacancy-footer > .vacancy-footer__button-wrapper > .button__background-color-green')
                .should('not.exist')
        })
    })

    it("Admin can't response to vacancie", () => {
        cy.log('Login as admin')
        cy.login('admin')

        cy.fixture('vacancies').then((vacancies) => {

            cy.log('Open create vacancie page')
            cy.visit(vacancies.vacancies_url)

            cy.log("Check non exist response button")
            cy.get('.vacancy-item__info-wrapper > .vacancy-item__footer-wrapper > .vacancy-footer > .vacancy-footer__button-wrapper > .button__background-color-green')
                .should('not.exist')
        })
    })
})
describe('Vacancie', () => {
    it("Response to vacancie", () => {
        cy.log('Response to avaible vacancie')
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
        cy.log('Response to avaible vacancie')
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
})
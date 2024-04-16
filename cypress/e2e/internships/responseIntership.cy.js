describe('Internships', () => {
    it("Response to internship", () => {
        cy.log('Response to avaible internship')
        cy.login('student')

        cy.fixture('internships').then((internships) => {

            cy.log('Open create internship page')
            cy.visit(internships.internships_url)

            cy.log("Click first enabled response button")
            cy.get('.internship-item__info-wrapper > .internship-item__footer-wrapper > .vacancy-footer > .vacancy-footer__button-wrapper > .button__background-color-green')
                .eq(0)
                .click()
        })
    })

    it("Response to disabled internship", () => {
        cy.log('Response to avaible internship')
        cy.login('student')

        cy.fixture('internships').then((internships) => {

            cy.log('Open create internship page')
            cy.visit(internships.internships_url)

            cy.log("Click first disabled response button")
            cy.get('.internship-item__info-wrapper > .internship-item__footer-wrapper > .vacancy-footer > .vacancy-footer__button-wrapper > .button__background-color-light-blue')
                .eq(0)
                .should('be.disabled')
        })
    })

    it("Eployer can't response to internship", () => {
        cy.log('Login as employer')
        cy.login('employer')

        cy.fixture('needs').then((needs) => {

            cy.log('Open create internship page')
            cy.visit(needs.needs_url)

            cy.log("Check non exist response button")
            cy.get('.need-item__info-wrapper > .need-item__footer-wrapper > .need-footer > .need-footer__button-wrapper > .vacancy-page-card__button')
                .should('not.exist')
        })
    })

    it("Admin can't response to internship", () => {
        cy.log('Login as admin')
        cy.login('admin')

        cy.fixture('needs').then((needs) => {

            cy.log('Open create internship page')
            cy.visit(needs.needs_url)

            cy.log("Check non exist response button")
            cy.get('.need-item__info-wrapper > .need-item__footer-wrapper > .need-footer > .need-footer__button-wrapper > .vacancy-page-card__button')
                .should('not.exist')
        })
    })
})
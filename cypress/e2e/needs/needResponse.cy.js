describe('Need', () => {
    it("Response to need", () => {
        cy.log('Response to avaible need')
        cy.login('student')

        cy.fixture('needs').then((needs) => {

            cy.log('Open create need page')
            cy.visit(needs.needs_url)

            cy.log("Click first enabled response button")
            cy.get('.need-item__info-wrapper > .need-item__footer-wrapper > .need-footer > .need-footer__button-wrapper > .vacancy-page-card__button')
                .eq(0)
                .click()
        })
    })

    it("Response to disabled need", () => {
        cy.log('Response to avaible need')
        cy.login('student')

        cy.fixture('needs').then((needs) => {

            cy.log('Open create need page')
            cy.visit(needs.needs_url)

            cy.log("Click first disabled response button")
            cy.get('.need-item__info-wrapper > .need-item__footer-wrapper > .need-footer > .need-footer__button-wrapper > .button__background-color-light-blue')
                .eq(0)
                .should('be.disabled')
        })
    })

    it("Eployer can't response to need", () => {
        cy.log('Login as employer')
        cy.login('employer')

        cy.fixture('needs').then((needs) => {

            cy.log('Open create need page')
            cy.visit(needs.needs_url)

            cy.log("Check non exist response button")
            cy.get('.need-item__info-wrapper > .need-item__footer-wrapper > .need-footer > .need-footer__button-wrapper > .vacancy-page-card__button')
                .should('not.exist')
        })
    })

    it("Admin can't response to need", () => {
        cy.log('Login as admin')
        cy.login('admin')

        cy.fixture('needs').then((needs) => {

            cy.log('Open create need page')
            cy.visit(needs.needs_url)

            cy.log("Check non exist response button")
            cy.get('.need-item__info-wrapper > .need-item__footer-wrapper > .need-footer > .need-footer__button-wrapper > .vacancy-page-card__button')
                .should('not.exist')
        })
    })
})
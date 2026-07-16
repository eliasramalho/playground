describe('Radio Buttons', () => {
    beforeEach(() => {
        cy.goHome()
        cy.goLogin()

        cy.goTo('/radio', 'Radio Buttons')
    })

    it('Deve marcar o framework Cypress ', () => {
        cy.contains('label', 'Cypress')
            .click()

    })

    it('Deve marcar o framework Playwright ', () => {
        cy.contains('label', 'Playwright')
            .click()

    })

    it('Deve percorrer por todos os frameworks de teste', () => {

        const frameworks = ['Cypress', 'Playwright', 'Selenium Webdriver', 'Robot Framework', 'Jest']
        frameworks.forEach(framework => {
            cy.contains('label', framework)
                .click()
        })



    })

})
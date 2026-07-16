describe('Checkbox', () => {
    beforeEach(() => {
        cy.goHome()
        cy.goLogin()

        cy.goTo('/checkbox', 'Checkbox')
    })

    it('Deve marcar linguagens de programação node.js', () => {
        cy.get('label[for="javascript"]')
            .click()

        cy.get('label[for="typescript"]')
            .click()
    })

    it('Deve marcar todas as linguagens de programação', () => {

        const langs = ['javascript', 'python', 'typescript', 'rust', 'go']

        langs.forEach(lang => {
        cy.get(`label[for="${lang}"]`)
            .click()
        })

    })
})


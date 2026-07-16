describe('Select', () => {

    beforeEach(() => {
        cy.goHome()
        cy.goLogin()

        cy.goTo('/select', 'Select')
    })

    it('Deve selecionar o Cypress', () => {
        cy.contains('label', 'Selecione um Framework de Testes')
            .parent()
            .find('select')
            .select('Cypress')
            .should('have.value', 'Cypress')
    })

    it('deve escolher as linguagens de que usam Node.js', () => {

        const langs = ['JavaScript', 'TypeScript']

        cy.get('input[placeholder^="Linguagens de programação"]')
            .click()

        langs.forEach(lang => {
            cy.contains('.option-item', new RegExp("^" + lang + "$"))
                .click()
        })

        cy.get('.language-item')
        .should('have.length', langs.length)

    })


})
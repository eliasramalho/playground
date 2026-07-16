describe('Textarea', () => {
    beforeEach(() => {
        cy.goHome()
    })

    it('Deve preencher uma area de texto', () => {
        cy.login('papito@cyskills.com.br', 'showtime')
        cy.userLoggedIn()

        cy.goTo('/textarea', 'Textarea')

        cy.get('textarea[name="message"]')
            .type('Este é um teste de preenchimento de textarea.')
    })
})


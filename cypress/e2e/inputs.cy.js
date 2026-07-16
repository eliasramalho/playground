describe('Inputs', () => {
    beforeEach(() => {
        cy.goHome()
        cy.goLogin()
    })

    it('Deve preencher o campo texto', () => {
        cy.get('nav a[href="/input-fields"]')
            .click()
        cy.get('h2')
            .should('be.visible')

        cy.get('#fullname')
            .type('John Doe')

        cy.get('input[name="email"]')
            .type('john.doe@example.com')

        cy.get('input[name="number"]')
            .type('2026')

        cy.get('input[name="date"]')
            .type('2024-12-31')
    })

})
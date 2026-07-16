describe('Date picker', () => {

    beforeEach(() => {
        cy.goHome()
        cy.goLogin()

        cy.goTo('/date-picker', 'Date Picker')
    })

    it('deve adicionar minha data de aniversario', () => {
        cy.get('input[placeholder="Escolha uma data"][readonly]')
            .click()

        cy.get('select[aria-label="Month"]')
            .select('Dezembro')

        cy.get('input[aria-label="Year"]')
            .type('1986')

        cy.get('span[aria-label="Dezembro 16, 1986"]')
            .click()


    })


})
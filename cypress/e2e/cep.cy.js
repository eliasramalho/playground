describe('CEP', () => {
    beforeEach(() => {
        cy.goHome()
        cy.goLogin()
        cy.goTo('/cep', 'CEP (API dos Correios)')
    })

    it('Deve cadastrar um endereco consumindo a API dos Correios', () => {

        const address = {
            cep: "04534011",
            logradouro: "Rua Joaquim Floriano",
            localidade: "São Paulo",
            uf: "SP"
        }

        cy.intercept('GET', 'https://viacep.com.br/ws/04534011/json/', {
            statusCode: 200,
            body: address
        }).as('getCep')

        cy.get('input[name="cep"]').type('04534011')
        cy.contains('button', 'Cadastrar').click()

        cy.wait('@getCep')

        cy.get('input[name="logradouro"]', { timeout: 70000 })
            .should('have.value', address.logradouro)

        cy.get('input[name="cidade"]', { timeout: 70000 })
            .should('have.value', address.localidade)

        cy.get('input[name="estado"]', { timeout: 70000 })
            .should('have.value', address.uf)

    })

})

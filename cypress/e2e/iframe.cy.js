describe('Iframe', () => {
    beforeEach(() => {
        cy.goHome()
        cy.goLogin()
        cy.goTo('/iframe', 'Iframe')
    })

    it('Deve preencher o nome dentro do iframe', () => {
        cy.get('[data-cy="iframe-inputs"]')
            .then($iframe => {
                const $body = $iframe.contents().find('body')

                cy.wrap($body)
                    .find('#fullname')
                    .type('Teste de Iframe')
            })

    })
})
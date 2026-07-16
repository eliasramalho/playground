describe('Login', () => {
  beforeEach(() => {
    cy.goHome()
  })

  it('Deve realizar login', () => {
    cy.login('papito@cyskills.com.br', 'showtime')
    cy.userLoggedIn()
  })

  it('Login com senha invalida', () => {
    cy.login('papito@cyskills.com.br', 'invalid-password')
    cy.haveNotice('E-mail ou senha incorretos. Por favor, tente novamente!')
  })

  it('Login com e-mail nao cadastrado', () => {
    cy.login('nao_cadastrado@cyskills.com.br', 'some-password')
    cy.haveNotice('E-mail ou senha incorretos. Por favor, tente novamente!')
  })

  it('Login com e-mail incorreto', () => {
    cy.login('www.cyskills.com.br', 'some-password')
    cy.haveNotice('O formato do e-mail está incorreto. Por favor, verifique e tente novamente!')

  })

  it('Nao deve logar sem o email', () => {
    cy.login('', 'some-password')
    cy.haveNotice('Parece que você esqueceu de informar seu e-mail.')
  })

  it('Nao deve logar sem a senha', () => {
    cy.login('papito@cyskills.com.br', '')
    cy.haveNotice('Por favor, informe sua senha para continuar.')
  })

  it('Nao deve logar sem o email e a senha', () => {
    cy.login('', '')
    cy.haveNotice('Parece que você esqueceu de informar seu e-mail.')
  })  

})
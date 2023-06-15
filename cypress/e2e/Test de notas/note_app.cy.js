describe('Note App', () => {
      beforeEach(() => {
            cy.visit('http://localhost:3000')
      })
      it('frontpage can be opened', () => {
            cy.contains('Notes by NicoDev')
      })

      it('login form can be open and user can login', () => {
            cy.contains('Login').click()
            cy.get('input:first').type('NicolasUser')
            cy.get('input:last').type('nicolas1973')
            cy.get('#form-login-button').click()
            cy.contains('Create a new note')
      })
})
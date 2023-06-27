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

  it('user can login', () => {
    cy.contains('Login').click()
    cy.get('[placeholder="Username"').type('NicolasUser')
    cy.get('[placeholder="Password"]').last().type('NicolasUser')
    cy.get('#form-login-button').click()
    cy.contains('Create a new note')
  })

  it('login fails with wrong password', () => {
    cy.contains('Login').click()
    cy.get('[placeholder="Username"').type('NicolasUser')
    cy.get('[placeholder="Password"]').last().type('NicolasUser-incorrecto')
    cy.get('#form-login-button').click()

    cy.get('.error').contains('Wrong credentials')

    cy.get('.error').should('contain', 'Wrong-credentials')
  })

  describe('when logged in', () => {
    beforeEach(() => {
      cy.login({username:'NicolasUser',password:'NicolasUser'})
    })

    it('a new note can be created', () => {
      const noteContent = 'a note created by cypress'
      cy.contains('show Create Note').click()
      cy.get('input').type(noteContent)
      cy.contains('save').click()
      cy.contains(noteContent)
    })

    describe('and a note exists', () => {
      beforeEach(() => {
       cy.createNote({
        content: 'nueva nota', 
        important:'false'
        })
      })

      it('it can be made important', () => {
        cy.contains('A note created from cypress').as('theNote')
        
        cy.get('@theNote')
        .contains('make important')
        .click
      })
    })
  })
})
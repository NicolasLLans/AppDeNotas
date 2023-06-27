Cypress.Commands.add('login', (username, password) => { 
      cy.request('POST', 'http://localhost:3001/api/login',{
        username,
        password
      }).then(response => {
        localStorage.setItem(
          'loggedNoteAppUser', JSON.stringify(response.body)
        )
        cy.visit('http://localhost:3000')
      })
 })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
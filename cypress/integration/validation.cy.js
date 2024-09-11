describe('User Authentication', () => {
    it('should log in with credentials from environment variables', () => {

     cy.visit('https://www.regalshoes.in/login?login_with=telephone')

     cy.get('.my-account-link > .fa').click()

     cy.get('#li1 > a').click()

     cy.get('#input-email').type('amit.parate23@gmail.com')

     cy.get('#input-password').type('Amit@123')

     cy.get('form > .text-center > .btn').click({force:true})

     cy.get('.my-account-link > .fa').click()

     cy.get('.my-account > .dropdown-menu > :nth-child(1) > a').click()

     cy.get('.person-name').should('be.visible').and('contain','Amit')

    });
  });
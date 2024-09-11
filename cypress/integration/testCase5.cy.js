
describe(' User Registration', ()=>{
    it('Test user registration with valid inputs  and confirmation', ()=>{
        cy.visit('https://demo.x-cart.com/demo/register.php')

        cy.get('#center-main')
        cy.get('#firstname').type("Amit")
        cy.get('#lastname').type('parate')
        cy.get('#company').type('Wipro')
        cy.get('#url').type('amitparate.com')
        cy.get('#tax_number').type('02235625')
        cy.get('#email').type('amit.parate08@gmail.com')

        cy.get('#passwd1').type('Amit@1234')

        cy.get('#passwd2').type('Amit@1234')

        cy.get('#accept_terms_register').check()

        cy.get('.button-left').click()

        cy.url().should('include','/address_book')

        cy.get('h1').should('contain.text', 'Address');

        cy.get('.header-links').should('contain', 'Amit')

      
    })

})
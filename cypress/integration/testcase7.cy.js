describe('checkout Process', () => {

    beforeEach(() => {
    
        cy.visit('https://demo.x-cart.com/demo/home.php');
    
    });
    
    it('Checkout process with valid payment', () => {
    
      cy.get(':nth-child(2) > .item-box > .image > .image-wrapper > a > img').click()
    
     cy.get("div[id='center-main'] h1").click()
    
     cy.get('.main-button > .button-right > .button-left').click()
    
     cy.get('.proceed-to-checkout').click()
    
     cy.get('#b_firstname').type('Amit')
    
     cy.get('#b_lastname').type('Parate')
    
     cy.get('#b_address').type('Patansaongi')
    
     cy.get('#b_city').type('Nagpur')
    
     cy.get('#b_zipcode').type('44201')
    
     cy.get('#email').type('amit.parate23@gmail.com')
    
     cy.get('.button-row > .button > .button-right').click()
    
     cy.get('#customer_notes').type('Good')
    
     cy.get('#accept_terms').check()
    
     cy.get('.button-left').click()

     //after confirmation page redirect with url payment_offiline
     cy.url().should('include','/payment_offline')

     cy.get('a').click()

    
    })

     
})
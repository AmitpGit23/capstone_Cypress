describe('Cart Management',()=>{
    beforeEach(() => {
        // Visit the website before each test
        cy.login();
      });

    it('Add items to the cart', ()=>{
       
        cy.get('.header-links').should('contain','Amit');

        cy.get('.line3 > .search > form > .text').type('apple')
        cy.get('.line3 > .search > form > .search-button').click()

        cy.get('.first > .item-box > .details > .buttons-cell > .buy-now > form > .buttons-row > .main-button > .button-right > .button-left > .fa').click()

        // cy.get('.continue-shopping').click()

        // cy.get('.navbar > .nav > :nth-child(2) > a').click()

    })

    it('Remove items from the cart', ()=>{
        cy.get('.nav > .current > a').click()

        cy.get('.highlight > tbody > tr > .details > .buttons-row > .wl-button > .button-right > .button-left').click()


    })
})
describe(' Product Search', ()=>{
    it('Test the search functionality for various product queries', ()=>{
        cy.visit('https://demo.x-cart.com/demo/cart.php')

        cy.get('.line3 > .search > form > .text').type('apple')
        cy.get('.line3 > .search > form > .search-button').click()

        cy.get('.line3 > .search > form > .text').clear()
        cy.get('.line3 > .search > form > .text').type('toys')
        cy.get('.line3 > .search > form > .search-button').click()

        cy.url().should('include', 'search')

    })

    it('Verify search results', ()=>{

        cy.visit('https://demo.x-cart.com/demo/cart.php')

        cy.get('.line3 > .search > form > .text').type('toys')
        cy.get('.line3 > .search > form > .search-button').click()

        cy.get('h1').should('contain','result')

        cy.get('.results-found').should('be.visible')

        cy.get('.dialog > .content').should('be.visible')

    })

   
})
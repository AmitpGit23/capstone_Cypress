describe('Homepage Navigation', ()=>{
    it('Verify that the homepage loads correctly', ()=>{
        cy.visit('https://demo.x-cart.com/demo/home.php')

        cy.get('.logo > a > img').should('be.visible')

        cy.get('.title > h2').should('contain','Featured')

        cy.get('#content-container').should('be.visible')

        cy.get('.footer-links').should('be.visible')       
    })
    it('Check that product categories are displayed', ()=>{
        cy.visit('https://demo.x-cart.com/demo/cart.php')

        cy.get('.menu-fancy-categories-list').should('be.visible')

        cy.get(':nth-child(2) > .icon-link').should('be.visible').click()

        cy.get(':nth-child(3) > .icon-link').should('be.visible').click()

        cy.get(':nth-child(4) > .icon-link').should('be.visible').click()
        
        cy.get(':nth-child(5) > .icon-link').should('be.visible').click()

        cy.get(':nth-child(6) > .icon-link').should('be.visible').click()

    })
})
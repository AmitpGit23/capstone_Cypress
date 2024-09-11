describe('Homepage Navigation', ()=>{
    it.skip('Verify that the homepage loads correctly', ()=>{
        cy.visit('https://www.thesouledstore.com')

        cy.get('.topheader68').should('be.visible')

        cy.get('.navbar').should('be.visible')

        cy.get('.navbar > .pointer').should('be.visible')

        cy.get('.additional-heading').should('be.visible').and('contain','HOMEGROWN')

        cy.get('footer').should('be.visible')     
    })
    
    it('Check that product categories are displayed', ()=>{
     
        cy.visit('https://www.thesouledstore.com')

        cy.get('[data-testid="floornav"] > :nth-child(1) > a').click()

        // cy.get('.activeCat > .router-link-exact-active').click()

        cy.get('[data-testid="floornav"] > :nth-child(3) > a').click()



    })   

})    
describe(' User login/logout ', ()=>{
    it('Test login functionality with valid and invalid credentials', ()=>{
         cy.visit('https://demo.x-cart.com/demo/cart.php')

        cy.login()
        cy.get('.name').should('contain', 'Amit')
    })

    it('Test logout functionality', ()=>{
        cy.login();

        cy.get('.header-links > [href="/demo/login.php?mode=logout"]').click()
        cy.url().should('include', '/home')

        cy.get('.header-links > #href_Sign_in').click()
        cy.get('#username').clear();
        cy.get('#password').clear();
        cy.get('#username').type('amit.parate23@gmail.com')
        cy.get('#password').type('Amit@123')
        cy.get('.button-left').click()     
        cy.get('[data-testid="desktop-user-menu-item-message-3"]')
    })
})
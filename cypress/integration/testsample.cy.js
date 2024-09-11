describe('User Registration', () => {
  it('should allow registration with valid inputs', () => {
    cy.visit('https://themes.woocommerce.com/storefront/my-account/');

    // Click on 'Register' link
    cy.get('a.woocommerce-MyAccount-navigation-link--edit-account').click();

    // Fill out the registration form with valid data
    cy.get('#reg_email').type('testuser@example.com');
    cy.get('#reg_password').type('Password123');
    cy.get('button[name="register"]').click();

    // Assert that registration was successful by checking for a confirmation message
    cy.get('.woocommerce-message').should('contain.text', 'Your account has been created.');
  });
});
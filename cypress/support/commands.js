// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add('login', () => {
    cy.visit('https://demo.x-cart.com/demo/cart.php')

    // const username = Cypress.env('email');
    // const password = Cypress.env('password');

    cy.get('.header-links > #href_Sign_in').click()
    cy.get('#username').clear();
    cy.get('#password').clear();
    cy.get('#username').type('amit.parate08@gmail.com')
    cy.get('#password').type('Amit@1234')
    cy.get('.button-left').click()
});
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
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
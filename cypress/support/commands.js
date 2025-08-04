// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
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

// / <reference types = "Cypress" />

// / <reference types = "cypress-xpath" />

Cypress.Commands.add('getIframe',(iframe)=>{
    return iframe = cy.get("mce_0_ifr")
    .its('0.contentDocument.body')
    .should('be.visible')
    .then(cy.wrap);
})

// i was getting error for copying xpath
require('cypress-xpath');


// Video 17 
// Custom command for clicking on link using label
Cypress.Commands.add('clickLink', (label) => {
    cy.get('a').contains(label).click();
})

// Overwrite contains()
Cypress.Commands.overwriteQuery('contains', (originalFn, subject, filter, text, options = {}) => { 
    // determine if a filter argument was passed
    if (typeof text === 'object') {
        options = text;
        text = filter;
        filter = undefined;
    }

    options.matchCase = false;  // default is true

    return originalFn(subject, filter, text, options);
});


// Custom command for login
// Custom command for login
Cypress.Commands.add("loginapp", (username, password) => {
    cy.get('#input-username').type(username);
    cy.get('#input-password').type(password);
    cy.get('button[type="submit"]').click();
});


Cypress.Commands.add("login", () => {
  cy.visit("/"); // assuming baseUrl is already set in cypress.config.js

  cy.get("input#user_email").type("levelup_admin@mailinator.com");
  cy.get("input#user_password").type("123456");
  cy.get('input.btn.btn-primary.my-3.w-100').click();
});
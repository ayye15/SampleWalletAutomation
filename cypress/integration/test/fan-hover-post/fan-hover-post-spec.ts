/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given(`fan is in creator page`,() =>{

  cy.visit(`${Cypress.config().baseUrl}/u/Arriele`)
  cy.wait(10000)
}); 

When(`fan hovers cursor on post`,()=>{

  cy.get('.css-ay8y4c').eq(0).trigger('.css-1y853nv')
  cy.wait(10000)
});

Then(`fan see post change to dark color`,()=>{
 
  cy.get('.css-ay8y4c').eq(0).should('be.visible')
  cy.wait(10000)
});
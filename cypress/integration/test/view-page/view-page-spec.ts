
/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

//Scenario: User visits Creator Profile
Given(`user is in Jamclout page`,() =>{

  cy.visit(`${Cypress.config().baseUrl}`);

}); 

When(`user visits creator profile`,()=>{

  cy.visit(`${Cypress.config().baseUrl}/u/Arriele`);
});

Then(`user should see creator's username {string}`,(text: string)=>{

  cy.get(".chakra-heading").eq(0).should("have.text",text);

});
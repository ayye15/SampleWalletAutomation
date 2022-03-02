/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given(`fan is in creator page`,() =>{

  cy.visit(`${Cypress.config().baseUrl}u/Arriele`)
  cy.wait(10000)

}); 

When(`fan clicks support button`,()=>{
 
  cy.get(".css-10tukno").find(".css-1wh2kri").click()
  cy.wait(5000)
  
});

Then(`fan should see support pannel`,()=>{
  
  cy.get(".css-3a5bz2")//check for tab profile photo
  cy.get(".css-qs6y2x").should("have.text","Support @Arriele")//check for tab text
  cy.wait(5000)
  cy.get(".css-u121y8").find(".css-3a5bz2").eq(0)//check tab Follow icon
  cy.get(".css-10xfkxy").find(".css-1yl45jc").eq(0).contains("Follow")//check for "Follow" text
  cy.wait(5000)
  cy.get(".css-x113gq").contains("Reward Active")//check for "Reward Active" pill
  cy.wait(5000)
  cy.get(".css-1ts8rx2").eq(0).contains("Get exclusive followers-only content straight to your inbox")//check for text
  cy.wait(5000)
  cy.get(".css-13b3zj8").eq(0).contains("Follow")//check for "Follow" button
  
});
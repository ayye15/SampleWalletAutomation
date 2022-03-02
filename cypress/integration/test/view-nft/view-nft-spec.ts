/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given(`fan is in creator page`,() =>{

  cy.visit(`${Cypress.config().baseUrl}u/Arriele`)
  cy.wait(10000)

}); 

When(`fan clicks nft tab`,()=>{
 
  cy.get(".css-1h9ftjb").find(".css-1benpnx").should("have.length", 4).each(($e1)=> { //array check if it has 4 tabs
        
    const tab=$e1.find(".css-qxkubb").text()
    if(tab.includes("NFTs")) //if NFTs tab is found then click
    {
     cy.get(".css-qxkubb").click()
     cy.wait(5000)

    }
});
  
});

Then(`fan see nfts posts`,()=>{
  
  cy.get(".css-1gga0kz")
  
});
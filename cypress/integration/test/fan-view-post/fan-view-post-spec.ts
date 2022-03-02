/// <reference types="cypress" />

import { Given, When, Then} from "cypress-cucumber-preprocessor/steps";

Given(`fan is in jamclout page`,() =>{

  cy.visit(`${Cypress.config().baseUrl}`)
  cy.wait(10000)

}); 

When(`fan enters creator link on the browser`,()=>{

  cy.visit(`${Cypress.config().baseUrl}u/Arriele`)
  cy.wait(10000)
});

Then(`fan should see creator posts`,()=>{

  cy.get(".css-785h49").find(".css-1y853nv").eq(0)
  cy.get(".css-785h49").find(".css-1y853nv").eq(1)
  cy.get(".css-785h49").find(".css-132tlxp")
  cy.wait(10000)
});

Given(`fan is in creator page`,() =>{

  cy.visit(`${Cypress.config().baseUrl}u/Arriele`)
  cy.wait(10000)

}); 

When(`fan clicks post`,()=>{

  cy.get(".css-785h49").find(".css-1y853nv").eq(0).click()
  cy.wait(10000)
});

Then(`fan should see the post image`,()=>{

  cy.get("iframe")
  cy.wait(5000)
  cy.get(".css-11t20w3").find(".css-3a5bz2")//fan should see creator profile photo
  cy.wait(5000)
  cy.get(".css-tmv5l3").should("have.text","Arriele")//fan should see creator username
  cy.wait(5000)
  cy.get(".css-126y67a").should("have.text","Ghibli Relaxing Music <3")//fan should see description
  cy.wait(10000)
  cy.get(".css-129dbqs").should("have.text","7 days ago")//fan should see correct post date
  cy.wait(5000)
  cy.get(".css-kgt3xu")
  cy.get(".css-1oin59x").eq(0).should("have.text","1")//fan should see correct number of likes
  cy.get(".css-onkibi").click()

});

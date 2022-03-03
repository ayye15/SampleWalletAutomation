/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

beforeEach(()=> {

  cy.visit(`${Cypress.config().baseUrl}/signin`)
  cy.wait(10000)
  cy.get('.ant-legacy-form-item-children').eq(0).type('admin117')
  cy.get('.ant-legacy-form-item-children').eq(1).type('password')
  cy.get('.mb-2').find('.ant-btn').click()
  cy.wait(10000)
  cy.get('.ant-tabs-tab-btn', {timeout:30000}).eq(0)
    .find('.d-inline-block').should("have.text", "Dashboard")
  cy.wait(15000)

});


Given(`admin is in dashboard`,() =>{
  cy.get('.ant-menu').find(':nth-child(2)').should("have.text", "Dashboard")
});

When(`admin clicks today option`,()=>{
  cy.get('.date-ranges').find(':nth-child(1) > a').click()

});

Then (`admin should see todays data`,()=>{

  cy.get('.sc-ljwYwh')
  .find(':nth-child(1) > a > .ant-card > .ant-card-body > .ant-row > .ant-col')
  .should("have.text", "Day to Day 0%")
});

Given(`admin is in dashboard`,() =>{
  cy.get('.ant-menu').find(':nth-child(2)').should("have.text", "Dashboard")
});

When(`admin clicks yesterday option`,()=>{
  cy.get('.date-ranges').find(':nth-child(2) > a').click()

});

Then (`admin should see yesterday data`,()=>{

  cy.get('.sc-ljwYwh')
  .find(':nth-child(1) > a > .ant-card > .ant-card-body > .ant-row > .ant-col')
  .should("have.text", "Day to Day 0%")
});

Given(`admin is in dashboard`,() =>{
  cy.get('.ant-menu').find(':nth-child(2)').should("have.text", "Dashboard")
});

When(`admin clicks this week option`,()=>{
  cy.get('.date-ranges').find(':nth-child(3) > a').click()

});

Then (`admin should see this week data`,()=>{

  cy.get(':nth-child(1) > a > .ant-card > .ant-card-body > .ant-row > .ant-col')
  .should("have.text", "Week to Week 0%")
});

Given(`admin is in dashboard`,() =>{
  cy.get('.ant-menu').find(':nth-child(2)').should("have.text", "Dashboard")
});

When(`admin clicks last week option`,()=>{
  cy.get('.date-ranges').find(':nth-child(4) > a').click()

});

Then (`admin should see last week data`,()=>{

  cy.get(':nth-child(1) > a > .ant-card > .ant-card-body > .ant-row > .ant-col')
  .should("have.text", "Week to Week 0%")
});

Given(`admin is in dashboard`,() =>{
  cy.get('.ant-menu').find(':nth-child(2)').should("have.text", "Dashboard")
});

When(`admin clicks this month option`,()=>{
  cy.get('.date-ranges').find(':nth-child(5) > a').click()

});

Then (`admin should see this month data`,()=>{

  cy.get(':nth-child(1) > a > .ant-card > .ant-card-body > .ant-row > .ant-col')
  .should("have.text", "Month to Month 0%")
});

Given(`admin is in dashboard`,() =>{
  cy.get('.ant-menu').find(':nth-child(2)').should("have.text", "Dashboard")
});

When(`admin clicks last month option`,()=>{
  cy.get('.date-ranges').find(':nth-child(6) > a').click()

});

Then (`admin should see last month data`,()=>{

  cy.get(':nth-child(1) > a > .ant-card > .ant-card-body > .ant-row > .ant-col')
  .should("have.text", "Month to Month 0%")
});

Given(`admin is in dashboard`,() =>{
  cy.get('.ant-menu').find(':nth-child(2)').should("have.text", "Dashboard")
});

When(`admin clicks annual option`,()=>{
  cy.get('.date-ranges').find(':nth-child(7) > a').click()

});

Then (`admin should see annual data`,()=>{

  cy.get(':nth-child(1) > a > .ant-card > .ant-card-body > .ant-row > .ant-col')
  .should("have.text", "Year to Year -100%")
});




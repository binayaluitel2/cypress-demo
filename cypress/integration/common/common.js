/// <reference types="cypress" />

import { And, Given, Then } from "cypress-cucumber-preprocessor/steps";

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

Given(`I go to DivvyCloud page`, () => {
  const url = Cypress.env("divvyURL");
  cy.visit(url);
});

Then(`I should see page title as {string}`, (title) => {
  cy.title().should("eq", title);
});

//Assert Site banner is present
Then(`I should see site banner`, () => {
  cy.get(".banner-content > p").exist;
});

//Assert banner text content
Then(`Banner text should contain {string}`, (bannerText) => {
  //hover over why divvycloud
  cy.get('#menu-item-167 > [href="https://divvycloud.com/why-divvy/"]').trigger(
    "mouseover"
  );

  //hover over banner
  cy.get("#site-banner > a").trigger("mouseover");

  cy.get("#menu-main-menu").click();
  cy.get(".banner-content > p").contains(bannerText);
    // cy.go("back");

});

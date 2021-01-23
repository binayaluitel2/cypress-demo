/// <reference types="cypress" />

import { And, Given, Then } from "cypress-cucumber-preprocessor/steps";

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});


Given(`I go to DivvyCloud page`, () => {
  const url = Cypress.env('divvyURL');
  cy.visit(url);
  cy.log(
    "Navigated to Dibbycloud.Navigated to Dibbycloud.Navigated to Dibbycloud.Navigated to Dibbycloud.Navigated to Dibbycloud.Navigated to Dibbycloud.Navigated to Dibbycloud.Navigated to Dibbycloud.Navigated to Dibbycloud.Navigated to Dibbycloud.Navigated to Dibbycloud.Navigated to Dibbycloud.Navigated to Dibbycloud.Navigated to Dibbycloud.Navigated to Dibbycloud.Navigated to Dibbycloud.Navigated to Dibbycloud.Navigated to Dibbycloud.Navigated to Dibbycloud.Navigated to Dibbycloud.Navigated to Dibbycloud.Navigated to Dibbycloud.Navigated to Dibbycloud.Navigated to Dibbycloud.Navigated to Dibbycloud.Navigated to Dibbycloud.Navigated to Dibbycloud.Navigated to Dibbycloud.Navigated to Dibbycloud.Navigated to Dibbycloud.Navigated to Dibbycloud.Navigated to Dibbycloud.Navigated to Dibbycloud.Navigated to Dibbycloud.Navigated to Dibbycloud.Navigated to Dibbycloud.Navigated to Dibbycloud.Navigated to Dibbycloud.Navigated to Dibbycloud.Navigated to Dibbycloud.Navigated to Dibbycloud.Navigated to Dibbycloud.Navigated to Dibbycloud.Navigated to Dibbycloud.Navigated to Dibbycloud.Navigated to Dibbycloud.Navigated to Dibbycloud.Navigated to Dibbycloud.Navigated to Dibbycloud.Navigated to Dibbycloud.Navigated to Dibbycloud.Navigated to Dibbycloud.Navigated to Dibbycloud.Navigated to Dibbycloud.Navigated to Dibbycloud.Navigated to Dibbycloud.Navigated to Dibbycloud.Navigated to Dibbycloud."
  );

});

Then(`I should see page title as {string}`, (title) => {
  cy.title().should("eq", title);
});

// Then(`insightIDR should be displayed`, () => {
//   cy.contains("insightIDR");
// });

//Assert Site banner is present
Then(`I should see site banner`, () => {
  cy.get(".banner-content > p").exist;
});

//Assert banner text
Then(`Banner text should contain {string}`, (bannerText) => {
  //hover over why divvycloud
  cy.get('#menu-item-167 > [href="https://divvycloud.com/why-divvy/"]').trigger(
    "mouseover"
  );

  //hover over banner
  cy.get("#site-banner > a").trigger("mouseover");

  cy.get("#menu-main-menu").click();
  cy.get(".banner-content > p").contains(bannerText);

  //open the page after clicking banner in same tab
  cy.get("#site-banner > a")
    .invoke("attr", "href")
    .then((myLink) => {
      cy.visit(myLink);
    });
  cy.go("back");
});

And(
  `I should see {string},{string},{string} and {string}`,
  (docs, support, pricing, request_a_demo) => {
    var docs = cy.get("#menu-item-173 > a");
    var support = cy.get("#menu-item-174");
    var pricing = cy.get("#menu-item-16434 > a");
    var request_a_demo = cy.get("#menu-item-175 > a");

    docs.exist;
    support.exist;
    pricing.exist;
    request_a_demo.exist;
  }
);

And(
  `I should see {string},{string},{string}, {string},{string},{string} and {string}`,
  (
    divvy_logo,
    why_divvy,
    platform,
    solutions,
    customers,
    resources,
    company
  ) => {
    var divvy_logo = cy.get("#svg-replaced-4");
    var why_divvy = cy.get("#menu-item-167");
    var platform = cy.get("#menu-item-168");
    var solutions = cy.get("#menu-item-169");
    var customers = cy.get("#menu-item-170");
    var resources = cy.get("#menu-item-171");
    var company = cy.get("#menu-item-172");

    divvy_logo.exist;
    why_divvy.exist;
    platform.exist;
    solutions.exist;
    customers.exist;
    resources.exist;
    company.exist;
  }
);

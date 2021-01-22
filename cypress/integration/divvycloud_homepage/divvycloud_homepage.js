import { And, Given, Then } from "cypress-cucumber-preprocessor/steps";

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

const divvyurl = "https://divvycloud.com/";

Given(`I go to DivvyCloud page`, () => {
  cy.visit(divvyurl);
});

Then(`I should see page title as {string}`, (title) => {
  cy.title().should("eq", title);
});

Then(`insightIDR should be displayed`, () => {
  cy.contains("insightIDR");
});

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

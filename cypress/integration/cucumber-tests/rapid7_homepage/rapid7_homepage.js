import { And, Given, Then } from "cypress-cucumber-preprocessor/steps";

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

Given(`I go to Rapid7 page`, () => {
  const url = Cypress.env('rapid7URL');
  cy.visit(url);});

Then(`I should see page title as {string}`, (title) => {
  cy.title().should("eq", title);
});

And(`I click Products`, () => {
  cy.get(
    ".container > .main-nav__links > :nth-child(1) > :nth-child(1) > .dropdown-trigger"
  ).click({ force: true });
});

//demo of individual product
And(`I select InsightIDR`, () => {
  cy.contains("InsightIDR").click({ force: true });
});

Then(`{string} should be displayed for InsightIDR`, (text_InsightIDR) => {
  cy.contains(text_InsightIDR);
});

And(`I select {string}`, (productsOption) => {
  cy.contains(productsOption).click({ force: true });
});

Then(`{string} should be displayed`, (text) => {
  cy.contains(text);
});

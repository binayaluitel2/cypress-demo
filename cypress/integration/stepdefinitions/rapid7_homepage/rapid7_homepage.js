import { And, Given, Then } from "cypress-cucumber-preprocessor/steps";

const rapid7url = "https://www.rapid7.com/";

Given(`I go to Rapid7 page`, () => {
  cy.visit(rapid7url);
});

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

Then(`insightIDR should be displayed`, () => {
  cy.contains("insightIDR");
});

And(`I select {string}`, (productsOption) => {
  cy.contains(productsOption).click({ force: true });
});

Then(`{string} should be displayed`, (text) => {
  cy.contains(text);
});

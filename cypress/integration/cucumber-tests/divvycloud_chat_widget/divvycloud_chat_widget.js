/// <reference types="cypress" />

import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";

And(`I should see chat Widget`, () => {
  cy.get("#drift-widget").should("be.visible");
});
When(`I click chat Widget`, () => {
  //click widget inside Iframe
  cy.get("iframe").then(($iframe) => {
    const $body = $iframe.contents().find("body");

    cy.wrap($body).find("#widgetButton").click({ force: true });
  });
});

Then(`chat window should pop up with {string}`, (message) => {
  //click widget inside Iframe
  cy.get("iframe").then(($iframe) => {
    const $body = $iframe.contents().find("body");

    cy.wrap($body).contains(message).should("exist");
  });
});

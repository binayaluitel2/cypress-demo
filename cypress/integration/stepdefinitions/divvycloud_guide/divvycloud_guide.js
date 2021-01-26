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

  // //open the page after clicking banner in same tab
  // cy.get("#site-banner > a")
  //   .invoke("attr", "href")
  //   .then((myLink) => {
  //     cy.visit(myLink);
  //   });
  // cy.go("back");
});

And(`I click the banner and navigate to the guide page`, () => {
    // //open the page after clicking banner in same tab
  cy.get("#site-banner > a")
    .invoke("attr", "href")
    .then((myLink) => {
      cy.visit(myLink);
    });
  // cy.go("back");
});

Then(`the contact form should appear`, () => {
  //asserts if the contact form is present
cy.get('#mylightbox-paywall > .contact-form-body').exist;
cy.get('#gform_submit_button_5').should('be.visible') ;

// //fixture tryout
// cy.fixture("guideform.json").then(function (data) {
//   this.data = data;

// //enter first name
// cy.get('#input_5_6').type(data.firstname);

// //enter last name
// cy.get('#input_5_8').type(data.lastname);

// //enter professional title
// cy.get('#input_5_7').type(data.title);

// //enter phone number
// cy.get('#input_5_9').type(data.phone);

// // enter organization
// cy.get('#input_5_13').type(data.org);

// // enter email
// cy.get('#input_5_11').type(data.email);

// // click on my organization 
// cy.get('#input_5_13').click();

// //asserts submit buton is enabled
// cy.get('#gform_submit_button_5').should('be.enabled');

// //asserts background color of button
// cy.get('#gform_submit_button_5').should('have.css', 'background-color', 'rgb(3, 202, 142)')

// });
});

And(`the submit button should be disabled`, () => {
  cy.get('#gform_submit_button_5').should('be.disabled');

});

When(`I fill all the required fields in the form`, () => {
//fixture tryout
cy.fixture("guideform.json").then(function (data) {
  this.data = data;

//enter first name
cy.get('#input_5_6').type(data.firstname);

//enter last name
cy.get('#input_5_8').type(data.lastname);

//enter professional title
cy.get('#input_5_7').type(data.title);

//enter phone number
cy.get('#input_5_9').type(data.phone);

// enter organization
cy.get('#input_5_13').type(data.org);

// enter email
cy.get('#input_5_11').type(data.email);

// click on my organization 
cy.get('#input_5_13').click();

// //asserts submit buton is enabled
// cy.get('#gform_submit_button_5').should('be.enabled');

// //asserts background color of button
// cy.get('#gform_submit_button_5').should('have.css', 'background-color', 'rgb(3, 202, 142)')
})
});
Then(`the submit button should be enabled and be of expected color`, () => {
//asserts submit buton is enabled
cy.get('#gform_submit_button_5').should('be.enabled');

//asserts background color of button
cy.get('#gform_submit_button_5').should('have.css', 'background-color', 'rgb(3, 202, 142)')
});
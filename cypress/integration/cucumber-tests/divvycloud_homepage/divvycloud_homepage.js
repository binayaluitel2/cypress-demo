/// <reference types="cypress" />

import { And, Given, Then } from "cypress-cucumber-preprocessor/steps";

// Cypress.on("uncaught:exception", (err, runnable) => {
//   // returning false here prevents Cypress from
//   // failing the test
//   return false;
// });

And(
  `I should see {string},{string},{string} and {string}`,
  (docs, support, pricing, request_a_demo) => {
    cy.screenshot();
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
// "divvy_logo", "why_divvy", "platform", "solutions", "customers", "resources" and "company"
And(
  `I should see {string}, {string}, {string}, {string}, {string}, {string} and {string}`,
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

And(
  `I should see {string}, {string}, {string}, {string}, {string}, {string}, {string} and {string}`,
  (
    iam_governance,
    infra_as_code_security,
    threat_protection,
    posture_management,
    risk_assess_audit,
    unified_visibility_monitoring,
    extensible_platform,
    automation_rt_remediation
  ) => {
    var iam_governance = cy.get('[data-id="12886"]');
    var infra_as_code_security = cy.get('[data-id="650"] > .icon');
    var threat_protection = cy.get('[data-id="12884"] > .icon');
    var posture_management = cy.get('[data-id="623"] > .icon');
    var risk_assess_audit = cy.get('[data-id="12888"] > .icon');
    var unified_visibility_monitoring = cy.get('[data-id="609"] > .icon');
    var extensible_platform = cy.get('[data-id="14131"] > .icon');
    var automation_rt_remediation = cy.get('[data-id="612"] > .icon');

    iam_governance.exist;
    infra_as_code_security.exist;
    threat_protection.exist;
    posture_management.exist;
    risk_assess_audit.exist;
    unified_visibility_monitoring.exist;
    extensible_platform.exist;
    automation_rt_remediation.exist;
  }
);

Feature: DivvyCloud Homepage Guide

              I want to navigate to DivvyCloud Homepage to do some exploratory testing.

        Scenario Outline: Verify site banner is present
            Given I go to DivvyCloud page
             Then I should see page title as "DivvyCloud - Protecting Cloud & Container Environments"
              And I should see site banner
              And Banner text should contain "<bannerText>"
              And I click the banner and navigate to the guide page
             Then the contact form should appear
              And the submit button should be disabled
             When I fill all the required fields in the form
             Then the submit button should be enabled and be of expected color

        Examples:
                  | bannerText                                     |
                  | Which cloud security solution is right for you |


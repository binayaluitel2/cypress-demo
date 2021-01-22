Feature: DivvyCloud Homepage

              I want to navigate to DivvyCloud Homepage to do some exploratory testing.

        Scenario: Navigate to DivvyCloud HomePage
            Given I go to DivvyCloud page
             Then I should see page title as "DivvyCloud - Protecting Cloud & Container Environments"
             
        Scenario Outline: Verify site banner is present
            Given I go to DivvyCloud page
             Then I should see page title as "DivvyCloud - Protecting Cloud & Container Environments"
              And I should see site banner
              And Banner text should contain "<bannerText>"

        Examples:
                  | bannerText                                     |
                  | Which cloud security solution is right for you |

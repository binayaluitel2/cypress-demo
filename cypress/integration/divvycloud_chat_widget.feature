Feature: DivvyCloud Chat Widget

              I want to navigate to DivvyCloud Homepage to do some exploratory testing.

        Scenario Outline: Verify Chat Widget is present
            Given I go to DivvyCloud page
             Then I should see page title as "DivvyCloud - Protecting Cloud & Container Environments"
              And I should see site banner
              And Banner text should contain "<bannerText>"
            #   And I should see chat Widget
            #   When I click chat Widget
            #   Then chat window should pop up
            #   And chat window should have "<windowtext>"

        Examples:
                  | bannerText                                     | windowtext |
                  | Which cloud security solution is right for you |            |

Feature: DivvyCloud Chat Widget

              I want to test
        @test
        Scenario Outline: Verify Chat Widget is present
            Given I go to DivvyCloud page
             Then I should see page title as "DivvyCloud - Protecting Cloud & Container Environments"
              And I should see chat Widget
             When I click chat Widget
             Then chat window should pop up with "<message>"
              # And chat window should have "<windowtext>"

        Examples:
                  | bannerText                                     | message                        |
                  | Which cloud security solution is right for you | not currently online right now |

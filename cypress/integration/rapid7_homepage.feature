Feature: Rapid7 Homepage

              I want to navigate to Rapid7 Homepage to do some exploratory testing.
        Scenario: Explore InsightIDR product of Rapid7
            Given I go to Rapid7 page
             Then I should see page title as "Cybersecurity & Compliance Solutions & Services | Rapid7"
              And I click Products
              And I select InsightIDR
             Then "InsightIDR is your security center" should be displayed for InsightIDR

        Scenario Outline: Explore different products of Rapid7
            Given I go to Rapid7 page
             Then I should see page title as "Cybersecurity & Compliance Solutions & Services | Rapid7"
              And I click Products
              And I select "<productsOption>"
             Then "<text>" should be displayed


        Examples:
                  | productsOption  | text                                                                                                               |
                  | InsightIDR      | Rapid7’s InsightIDR is your security center                                                                        |
                  | InsightVM       | InsightVM leverages this platform for live vulnerability and endpoint analytics.                                   |
                  | InsightAppSec   | Free InsightAppSec Trial                                                                                           |
                  | InsightConnect  | InsightConnect is Rapid7’s security orchestration and automation response (SOAR)                                   |
                  | InsightOps      | insightOps                                                                                                         |
                  | DivvyCloud      | Experience the freedom to innovate securely                                                                        |
                  | Metasploit      | metasploit                                                                                                         |
                  | Nexpose         | Nexpose Vulnerability Scanner                                                                                      |
                  | AppSpider       | appspider                                                                                                          |
                  | tCell by Rapid7 | The next-gen cloud WAF and RASP tool that gives you complete visibility for application monitoring and protection. |

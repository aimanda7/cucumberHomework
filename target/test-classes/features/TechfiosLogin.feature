Feature: Techfios Other billing login page functionality validation

  Background: 
    Given User is on the techfios login page
    When User enters "demo@techfios.com" as username
    When User enters "abc123" as password
    And User clicks on "login"

  @Scenario1
  Scenario: User should be able to login with valid credentials
    
    Then User should land on Dashboard page

  @Scenario2
  Scenario: User should be able to open a new account
    And User clicks on the button to open "bankAndCash"
    And User clicks on "newAccount" to fill the form
    And User enters "Family Saving" in the accountTitle field in accounts page
    And User enters "Investiment account" in the description field in accounts page
    And User enters "10000000" in the initialBalance field in accounts page
    And User enters "Z" in the accountNumber field in accounts page
    And User enters "Aimable" in the contactPerson field in accounts page
    And User enters "8" in the Phone field in accounts page
    And User enters "www.aimableisrich.com" in the internetBankingURL field in accounts page
    And User clicks on "submit" to submit
    Then User should be able to validate account created successfully

$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:features/TechfiosLogin.feature");
formatter.feature({
  "name": "Techfios Other billing login page functionality validation",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.LoginAndAccStepDefinition.user_is_on_the_techfios_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"demo@techfios.com\" as username",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginAndAccStepDefinition.user_enters_as_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"abc123\" as password",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginAndAccStepDefinition.user_enters_as_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on \"login\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginAndAccStepDefinition.user_clicks_on(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to open a new account",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Scenario2"
    }
  ]
});
formatter.step({
  "name": "User clicks on the button to open \"bankAndCash\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginAndAccStepDefinition.user_clicks_on_the_button_to_open(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on \"newAccount\" to fill the form",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginAndAccStepDefinition.user_clicks_on_to_fill_the_form(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Family Saving\" in the accountTitle field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginAndAccStepDefinition.user_enters_in_the_accountTitle_field_in_accounts_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Investiment account\" in the description field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginAndAccStepDefinition.user_enters_in_the_description_field_in_accounts_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"10000000\" in the initialBalance field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginAndAccStepDefinition.user_enters_in_the_initialBalance_field_in_accounts_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Z\" in the accountNumber field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginAndAccStepDefinition.user_enters_in_the_accountNumber_field_in_accounts_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Aimable\" in the contactPerson field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginAndAccStepDefinition.user_enters_in_the_contactPerson_field_in_accounts_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"8\" in the Phone field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginAndAccStepDefinition.user_enters_in_the_Phone_field_in_accounts_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"www.aimableisrich.com\" in the internetBankingURL field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginAndAccStepDefinition.user_enters_in_the_internetBankingURL_field_in_accounts_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on \"submit\" to submit",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginAndAccStepDefinition.user_clicks_on_to_submit(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.LoginAndAccStepDefinition.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
package steps;

import org.openqa.selenium.support.PageFactory;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import junit.framework.Assert;
import pages.LoginAndAcctPage;
import pages.TestBase;

public class LoginAndAccStepDefinition extends TestBase {
	LoginAndAcctPage loginAndAcctPage;


	@Before
	public void beforeRun() {

		initDriver();
		loginAndAcctPage = PageFactory.initElements(driver, LoginAndAcctPage.class);
		

	}
	
	@Given("User is on the techfios login page")
	public void user_is_on_the_techfios_login_page() {
		driver.get("https://techfios.com/billing/?ng=admin/");
	 
	}

	@When("User enters {string} as username")
	public void user_enters_as_username(String username) {
		loginAndAcctPage.enterUserName(username);
		

	}

	@When("User enters {string} as password")
	public void user_enters_as_password(String password) {
		loginAndAcctPage.enterPassword(password);

	}

	@When("User clicks on {string}")
	public void user_clicks_on(String signIn) {
		loginAndAcctPage.clickSignInButton();
	
	}

	@Then("User should land on Dashboard page")
	public void user_should_land_on_Dashboard_page() {
		
	String expectedHeader ="Dashboard";
	String actualHeader = loginAndAcctPage.getPageHeader();
	Assert.assertEquals("Dashboard not found", expectedHeader, actualHeader);
	screenshot(driver);
	
	
	
	}
	@When("User clicks on the button to open {string}")
	public void user_clicks_on_the_button_to_open(String bankAndCash) {
	  loginAndAcctPage.clickBankAndCash();
	  try {
		Thread.sleep(1000);
	} catch (InterruptedException e) {
			e.printStackTrace();
	}
	}

	@Given("User clicks on {string} to fill the form")
	public void user_clicks_on_to_fill_the_form(String newAccount) {
		loginAndAcctPage.clickNewAccount();

	}
	
	@Given("User enters {string} in the accountTitle field in accounts page")
	public void user_enters_in_the_accountTitle_field_in_accounts_page(String Title) {
		loginAndAcctPage.insertAccountTitle(Title);

	}

	@Given("User enters {string} in the description field in accounts page")
	public void user_enters_in_the_description_field_in_accounts_page(String description) {
		loginAndAcctPage.insertDescription(description);
		

	}

	@Given("User enters {string} in the initialBalance field in accounts page")
	public void user_enters_in_the_initialBalance_field_in_accounts_page(String initialBalance) {
		loginAndAcctPage.instertInitialBalance(initialBalance);

	}

	@Given("User enters {string} in the accountNumber field in accounts page")
	public void user_enters_in_the_accountNumber_field_in_accounts_page(String accnbr) {
		loginAndAcctPage.insertAccauntNumber(accnbr);
	
	}

	@Given("User enters {string} in the contactPerson field in accounts page")
	public void user_enters_in_the_contactPerson_field_in_accounts_page(String AImable) {
	loginAndAcctPage.instertContactPerson(AImable);
	}

	@Given("User enters {string} in the Phone field in accounts page")
	public void user_enters_in_the_Phone_field_in_accounts_page(String phonenbr) {
		loginAndAcctPage.insertPhoneNumber(phonenbr);

	}

	@Given("User enters {string} in the internetBankingURL field in accounts page")
	public void user_enters_in_the_internetBankingURL_field_in_accounts_page(String url) {
		loginAndAcctPage.insertInternetBankingUrl(url);

	}

	@Given("User clicks on {string} to submit")
	public void user_clicks_on_to_submit(String string) {
		loginAndAcctPage.clickSubmitButton();
	
	}

	@Then("User should be able to validate account created successfully")
	public void user_should_be_able_to_validate_account_created_successfully() {
		
		String expectedheader="Manage Accounts";
		String actualheader =loginAndAcctPage.validationPage();
		Assert.assertEquals("Account is not created", expectedheader, actualheader);
		screenshot(driver);
		

	}
	
	

	

	@After
	public void tearDown() {
		driver.close();
		driver.quit();
	}

}

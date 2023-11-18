package runners;
import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		 //features ="src\\test\\resources\\features\\TechfiosLogin.feature",		
		// features = "src\\test\\resources\\features",
		
		
		features = "classpath:features",
		glue = "steps",
		tags="@Scenario2",
		dryRun = false, 
		monochrome = true,
		plugin = { 
				"pretty",
				"html:target/reports/cucumber.html",
			
		}
		
		)
public class Runner {

}

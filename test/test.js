var webdriver = require('selenium-webdriver');
var chromedriver = require('chromedriver');
var geckodriver = require('geckodriver');
var By = require('selenium-webdriver').By;
var until = require('selenium-webdriver').until;
var chai = require('chai');

chai.use(require('chai-as-promised'));
expect = chai.expect;

before(function()
{
	this.timeout(10000);
	this.driver = new webdriver.Builder().forBrowser('chrome').build();
	this.driver.manage().window().maximize();
	this.driver.manage().deleteAllCookies();
	return this.driver.get('http://jaspal-webapp.herokuapp.com/');
});

/*after(function()
{
	return this.driver.quit();
});*/

describe('Authentication', function()
{
	it('Title', function()
	{
		return expect(this.driver.getTitle()).to.eventually.contain('Express');
	}, 5000);

	it('Sign Up', function()
	{

		this.driver.findElement(By.id('signupEmail')).sendKeys('test@test.com');
		this.driver.findElement(By.id('signupPassword')).sendKeys('test');
		this.driver.findElement(By.id('signupButton')).click();
	});

});



//Close Browser//
//driver.quit();
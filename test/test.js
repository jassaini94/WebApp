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

after(function()
{
	return this.driver.quit();
});

describe('Authentication', function()
{
	it('Sign Up', function()
	{
		/*
		driver.findElement(By.id('email')).sendKeys('****');
		driver.findElement(By.id('pass')).sendKeys('*****');
		driver.findElement(By.id('loginbutton')).click();
		*/
		
		return expect(this.driver.getTitle()).to.eventually.contain('Express');
	}, 5000);

});





//Close Browser//
//driver.quit();
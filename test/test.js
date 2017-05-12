'use strict'

var webdriver = require('selenium-webdriver');
var chromedriver = require('chromedriver');
var By = webdriver.By;
var until = webdriver.until;
var test = require('selenium-webdriver/testing');

var assert = require('assert');
var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;

chai.use(chaiHttp);
var should = chai.should();

var timeOut = 15000;

var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

test.describe('Authentication',function()
{
	this.timeout(timeOut);
	
	test.it('Sign Up', function()
	{
		driver.get('http://jaspal-webapp.herokuapp.com');
		driver.wait(until.titleIs('Express'), 10000);
		driver.get('http://jaspal-webapp.herokuapp.com');

		driver.findElement(webdriver.By.id('signupEmail')).sendKeys('test@test.com');
		driver.findElement(webdriver.By.id('signupPassword')).sendKeys('test');
		driver.findElement(webdriver.By.id('signupButton')).click();
	});

	test.it('Log In', function()
	{
		driver.manage().deleteAllCookies();

		driver.findElement(webdriver.By.id('loginEmail')).sendKeys('test@test.com');
		driver.findElement(webdriver.By.id('loginPassword')).sendKeys('test');
		driver.findElement(webdriver.By.id('loginButton')).click();
	});
})

test.describe('Features', function()
{
	it('Post Expressions(Tweets)', function()
	{

	});

	it('Follow Users', function()
	{

	});

});

test.describe('Log Out', function()
{
	it('Log Out', function()
	{
		driver.findElement(webdriver.By.id('logOut')).click();
	});
});






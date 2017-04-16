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

//chai.should();

var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

driver.get('http://jaspal-webapp.herokuapp.com/');
driver.get('http://jaspal-webapp.herokuapp.com/');

test.describe('Authentication',function()
{
	test.it('Sign Up', function()
	{
		driver.findElement(webdriver.By.id('signupEmail')).sendKeys('test@test.com');
		driver.findElement(webdriver.By.id('signupPassword')).sendKeys('test@test.com');
		driver.findElement(webdriver.By.id('signupButton')).click();
	});
})






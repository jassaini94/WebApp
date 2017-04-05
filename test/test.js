var webdriver = require('selenium-webdriver');

var chromedriver = require('chromedriver');
var geckodriver = require('geckodriver');

var By = require('selenium-webdriver').By;
var until = require('selenium-webdriver').until;

//Open Chrome//
var driver = new webdriver.Builder().forBrowser('chrome').build();

//Maximize Browser Size//
driver.manage().window().maximize();

//Delete all Cookies//
driver.manage().deleteAllCookies();

//Navigate to Website//
driver.get('http://jaspal-webapp.herokuapp.com/');

/*
driver.findElement(By.id('email')).sendKeys('****');
driver.findElement(By.id('pass')).sendKeys('*****');
driver.findElement(By.id('loginbutton')).click();
*/

//Close Browser//
//driver.quit();
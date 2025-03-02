const { Builder, By, until, Key } = require('selenium-webdriver');

async function login(driver, email, password) {

    const waitTimeout = 7000;
    
    await driver.get("https://internshala.com");

    //login
    const loginButton = await driver.wait(until.elementLocated(By.className('login-cta')), waitTimeout);
    await loginButton.click();

    const emailField = await driver.wait(until.elementLocated(By.id('modal_email')), waitTimeout);
    await emailField.sendKeys(email, Key.ENTER);

    const passwordField = await driver.wait(until.elementLocated(By.id('modal_password')), waitTimeout);
    await passwordField.sendKeys(password, Key.ENTER);

    await driver.wait(until.urlContains("student/dashboard"), waitTimeout);
}

module.exports = { login };
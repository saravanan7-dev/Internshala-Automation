const { Builder } = require('selenium-webdriver');
const config = require('./config');
const { login } = require('./login');
const { applyInternships } = require('./applyInternships');

async function automation() {
    
    const driver = new Builder().forBrowser('chrome').build();
    await driver.manage().window().maximize();
    
    try {
        await login(driver, config.email, config.password);
        await applyInternships(driver);
    } catch (err) {
        console.log("Automation Error:", err);
    } finally {
        await driver.quit();
    }
};

module.exports = automation;
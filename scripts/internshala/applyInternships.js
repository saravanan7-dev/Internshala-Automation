const { By, until } = require('selenium-webdriver');

async function applyInternships(driver) {
    const waitTimeout = 7000;

    //navbar internship button
    const internshipsButton = await driver.wait(
        until.elementLocated(By.xpath('//*[@id="internships_new_superscript"]')),
        waitTimeout
    );
    await internshipsButton.click();

    //all cards
    const buttons = await driver.wait(
        until.elementsLocated(By.className('job-title-href')),
        waitTimeout
    );
    console.log(`${buttons.length} results found`);

    const originalWindow = await driver.getWindowHandle();

    for (let i = 0; i < buttons.length; i++) {
        try {
            //each card
            const button = buttons[i];
            await driver.wait(until.elementIsVisible(button), waitTimeout);
            await button.click();

            const windowHandles = await driver.wait(async () => {
                const handles = await driver.getAllWindowHandles();
                return handles.length > 1 ? handles : null;
            }, waitTimeout);

            if (windowHandles) {
                //switching tabs
                const newWindow = windowHandles.find(handle => handle !== originalWindow);
                await driver.switchTo().window(newWindow);

                //job title and company
                const jobTitle = await driver.wait(until.elementLocated(By.className('heading_4_5 profile')), waitTimeout).getText();
                const hiringCompany = await driver.wait(until.elementLocated(By.className('link_display_like_text')), waitTimeout).getText();
                
                //apply now button
                try {
                    const applyButton = await driver.wait(until.elementLocated(By.id('easy_apply_button')), waitTimeout) ;
                    await applyButton.click();
                
                    //copy previous cover letter
                    try {
                        const copyButton = await driver.findElement(By.className('copyCoverLetterTitle'));
                        await copyButton.click();
                        await driver.sleep(1000);
                    }
                    catch(err) {
                        if(err.name !== 'NoSuchElementError')
                            console.log('Error interacting with Copy Cover Letter button:', err.message);              
                    }

                    //final submit button
                    //await driver.wait(until.elementLocated(By.id('submit')),waitTimeout).click();

                    console.log(`${i + 1}) Applied for ${jobTitle} by ${hiringCompany}`);
                }
                catch (e) {
                    console.log("This result has been applied earlier");
                }
                
                //close curr tab
                await driver.close();
                await driver.switchTo().window(originalWindow);
            }
        } catch (err) {
            console.log(`Error applying for internship ${i + 1}: ${err.message}`);
        }
    }
}

module.exports = { applyInternships };
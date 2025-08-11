import {test, expect} from '@playwright/test'

test('Locators', async ({page}) =>{
    await page.goto("https://demoblaze.com/");

    //Click on login button 
    await page.click('id=login2')

    //provide username -CSS
    await page.fill('#loginusername','ic3cream');

    //provide password - CSS
    await page.fill('#loginpassword','test1234');

    // try to login
    await page.click("//button[normalize-space()='Log in']");

    // check the visibility of Logout link
    const logoutLink = await page.locator("(//a[normalize-space()='Log out'])[1]");
    await expect(logoutLink).toBeVisible();

    // try to logout
    await page.click("(//a[normalize-space()='Log out'])[1]");

    await page.close();
});
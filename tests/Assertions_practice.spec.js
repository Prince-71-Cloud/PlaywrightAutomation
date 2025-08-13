import {test,expect} from '@playwright/test'
// @ts-check
test('Assertions Practice', async ({page})=>{
    // open URL
    await page.goto('https://demo.nopcommerce.com/register');

    // Page has URL or Not 
    await expect(page).toHaveURL("https://demo.nopcommerce.com/register");

    // Page title has or not
    await expect(page).toHaveTitle('nopCommerce demo store. Register');

    // element visible or not
    const LogoElement = await page.locator('.header-logo');
    await expect(LogoElement).toBeVisible();

    //control enable or not
    const searchStoreBox = await page.locator('#small-searchterms');
    await expect(searchStoreBox).toBeEnabled();

    //radio/Checkbox enable or not
    const maleRedioButton = await page.locator('#gender-male');
    await maleRedioButton.click();
    await expect(maleRedioButton).toBeChecked();

    //checkbox enable or not
    const newsletterCheckbox = await page.locator('#Newsletter');
    await newsletterCheckbox.click(false);
    await expect(newsletterCheckbox).not.toBeChecked();

    // has attribute or not
    const registerButton = await page.locator('#register-button');
    await expect(registerButton).toHaveAttribute('type','submit');

    // element matches text
    // match
    await expect(await page.locator('.page-title h1')).toHaveText('Register');

     // element partially matches with text
    await expect(await page.locator('.page-title h1')).toContainText('Reg');

    // input value has or not
    const fNameInput = await page.locator('#FirstName');
    await fNameInput.fill('test123');
    await expect(fNameInput).toHaveValue('test123');

    //elements has given length
    const options = await page.locator("(//a[normalize-space()='Apparel'])");
    await expect(options).toHaveCount(2);

});
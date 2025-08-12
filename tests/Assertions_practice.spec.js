import {test,expect} from '@playwright/test'
// @ts-check
test('Assertions Practice', async ({page})=>{
    // open URL
    await page.goto('https://demo.nopcommerce.com/register');

    // Page has URL or Not 
    await expect(page).toHaveURL("https://demo.nopcommerce.com/register");

    // Page title has or not
    await expect(page).toHaveTitle('nopCommerce demo store. Register');
})
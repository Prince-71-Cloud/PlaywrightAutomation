import {test, expect} from '@playwright/test'
// @ts-check
test('Soft asseritons practice', async ({page})=>{
    await page.goto('https://demo.nopcommerce.com/');
    // soft assertion (.soft)
    await expect.soft(page).toHaveTitle('nopCommerce demo store. Home page title123');//use soft assertion for ignoring failed test case
    await expect(page).toHaveURL('https://demo.nopcommerce.com/');
    await expect(page.locator('.header-logo')).toBeVisible();
})
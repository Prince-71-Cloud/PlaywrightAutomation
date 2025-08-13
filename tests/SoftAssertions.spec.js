import {test, expect} from '@playwright/test'
// @ts-check
test('Soft asseritons practice', async ({page})=>{
    await page.goto('https://www.daraz.pk/#?');

    // soft assertion (.soft)
    await expect.soft(page).toHaveTitle('Online Shopping in Pakistan: Fashion, Electronics & Groceries - Daraz.pk');//use soft assertion for ignoring failed test case
    await expect(page).toHaveURL('https://www.daraz.pk/#?');
    await expect(page.locator('.lzd-logo-content')).toBeVisible();
})
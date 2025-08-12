import{test, expect} from '@playwright/test'
// @ts-check
test('Drop down menu test', async({page})=> {
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator("//label[normalize-space()='Country:']").selectOption({label:'France'});
    
    //await page.waitForTimeout(5000);
})
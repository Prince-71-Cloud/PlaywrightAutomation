import {test, expect} from '@playwright/test'
// @ts-check
/*test('Locate Multiple Element', async ({page})=> {
    await page.goto('https://demoblaze.com/');
    const links = await page.$$('a');

    for (const link of links){
        const linkText =  await link.textContent();
        console.log(linkText);
    }

    await page.close();
});*/

test('checking products name', async ({page})=>{
    await page.goto('https://demoblaze.com/');
     const products = await page.$$("//div[@id='tbodyid']//div//h4/a");

     for (const product of products){
        const linkTitle = await product.textContent();
        console.log(linkTitle);
     }

     await page.close();
});
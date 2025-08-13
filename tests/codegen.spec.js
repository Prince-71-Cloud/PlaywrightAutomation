
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  test.setTimeout(60000); // Increase timeout to 60 seconds
  console.log('Navigating to homepage');
  await page.goto('https://demoblaze.com/index.html');
  console.log('Clicking Log in');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('ic3cream');
  await page.locator('#loginusername').press('Tab');
  await page.locator('#loginpassword').fill('test1234');
  await page.getByRole('button', { name: 'Log in' }).click();
  console.log('Logged in, navigating through site');
  await page.getByRole('link', { name: 'Welcome ic3cream' }).click();
  await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
  await page.getByRole('link', { name: 'Cart', exact: true }).click();
  await page.getByRole('link', { name: 'About us' }).click();
  await page.getByText('No compatible source was').click();
  //await page.getByRole('link', { name: 'Home (current)' }).click();
  //await page.getByRole('heading', { name: '$650' }).click();
  //await page.getByText('Nexus 6$650The Motorola').click();
  //await page.locator('div:nth-child(3) > .card > a').click();
  //await page.getByText('Address: 2390 El Camino Real').click();
  //await page.getByText('Phone: +440').click();
  //await page.getByRole('heading', { name: 'PRODUCT STORE' }).click();
  //await page.getByText('We believe performance needs').click();

  
});
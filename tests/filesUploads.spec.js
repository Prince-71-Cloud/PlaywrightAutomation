import {test, expect} from '@playwright/test'

// @ts-check
test('Checking File Upload', async ({page}) =>{
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
    
        await page.waitForSelector('#filesToUpload');
        await page.locator('#filesToUpload').click();

        await page.locator('#filesToUpload').setInputFiles('tests/cat/Crying-Cat-Meme.png');

    await page.waitForTimeout(2000);
});

test('Checking Multiple Files Upload', async ({page})=>{
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

    
    await page.waitForSelector('#filesToUpload');
    await page.locator('#filesToUpload').click();
    // No additional code is needed here for uploading multiple files.
    // The setInputFiles method accepts an array of file paths as shown below.
    await page.locator('#filesToUpload').setInputFiles(['tests/cat/Crying-Cat-Meme.png','tests/cat/Crying-Cat.png']);

    await page.waitForTimeout(2000);
});
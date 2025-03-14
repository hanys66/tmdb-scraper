const puppeteer = require('puppeteer');
const path = require('path');

// Define the cache directory
const cacheDirectory = path.join(__dirname, '.cache', 'puppeteer');
console.log('cache= ',cacheDirectory);
(async () => {
    const browser = await puppeteer.launch({
        headless: true, // Run in headless mode
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        // Set the cache directory
        cacheDirectory: cacheDirectory,
    });

    const page = await browser.newPage();
    await page.goto('https://example.com');
    const title = await page.title();
    console.log(`Page title: ${title}`);

    await browser.close();
})();
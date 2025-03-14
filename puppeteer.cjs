/*
const { join } = require('path');

/!**
 * @type {import("puppeteer").Configuration}
 *!/
module.exports = {
    // Changes the cache location for Puppeteer.
    cacheDirectory: join(__dirname, '.cache', 'puppeteer'),
};*/
const { win32 } = require('path');
const { join } = win32; // Explicitly use Windows-style path joining

/**
 * @type {import("puppeteer").Configuration}
 */
module.exports = {
    // Changes the cache location for Puppeteer.
    cacheDirectory: join(__dirname, '.cache', 'puppeteer'),
};
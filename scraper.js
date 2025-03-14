process.env.PUPPETEER_CACHE_DIR = 'E:\\tmdb-scraper\\.cache\\puppeteer';
const puppeteer = require("puppeteer-core");
const config = require('./puppeteer.cjs');
const path = require('path');
// Define the cache directory
process.env.PUPPETEER_CACHE_DIR = 'E:\\tmdb-scraper\\.cache\\puppeteer';

const cacheDirectory = path.join(__dirname, '.cache', 'puppeteer');
//console.log('Cache= ',cacheDirectory);
//console.log("Using Puppeteer cache directory:", process.env.PUPPETEER_CACHE_DIR);
//console.log("Using Puppeteer download path:", process.env.PUPPETEER_DOWNLOAD_PATH);

async function scrapeMovies() {
    const browser = await puppeteer.launch({
        headless: "new",
        //executablePath: puppeteer.executablePath(), // Use Puppeteer's Chromium
       // executablePath: 'E:\\tmdb-scraper\\chrome-win\\chrome-win\\chrome.exe' ,// Replace with actual path
        executablePath:"C:\\temp\\puppeteer-cache\\chrome\\win64-134.0.6998.35\\chrome-win64\\chrome.exe",
        args: ["--no-sandbox", "--disable-setuid-sandbox",
        ],
        // Set the cache directory
        cacheDirectory: cacheDirectory,
    });
    const page = await browser.newPage();
    await page.goto("https://www.themoviedb.org/movie", { waitUntil: "domcontentloaded" });

    const movies = await page.evaluate(() => {
        return Array.from(document.querySelectorAll(".card")).map(movie => ({
            title: movie.querySelector("h2 a")?.innerText.trim() || "No Title",
            url: movie.querySelector("h2 a")?.href || "No URL"
        }));
    });
    await browser.close();
    return movies;
}
// If run directly, test the scraper
if (require.main === module) {
    scrapeMovies().then(console.log).catch(console.error);
}
module.exports = scrapeMovies;
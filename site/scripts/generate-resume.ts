import * as puppeteer from 'puppeteer';
const open = require('open');

const filename = 'resume.pdf';
(async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('http://localhost/resume/')
    await page.pdf({
        path: filename, format: 'A4', printBackground: true
    })
    await browser.close()
    open(filename);
})();
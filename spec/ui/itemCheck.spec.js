const fs = require('fs');
const puppeteer = require('puppeteer');
const db = require('../../src/persistence');

describe('Checked Item', () => {
  test('It should Check item from UI', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage()
    await page.goto('http://localhost:3000/');
    await expect(page.title()).resolves.toMatch('Todo App');

    const checkBoxSelector = '#root > div > div > div > div > div > div:nth-child(1) > button'
    await page.waitForSelector(checkBoxSelector);
    await page.focus(checkBoxSelector);

    await db.init()

    await browser.close();
  });
});

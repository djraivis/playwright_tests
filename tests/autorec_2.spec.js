const { test, expect } = require('@playwright/test');
const { chromium } = require('@playwright/test');

test('autorec_2', async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://uktvplay.co.uk/');
  await page.getByRole('button', { name: 'YES I ACCEPT' }).click();
  await page.getByRole('link', { name: 'More', exact: true }).click();
  await page.locator('#tab-ways-to-watch').click();
  await page.getByRole('link', { name: 'Set PIN' }).click();
  await page.locator('#tab-accessibility').click();
  await page.locator('#tab-help').click();
  await page.getByRole('link', { name: 'Contact us', exact: true }).click();
  await page.locator('#nav-bar-home').click();

  // ---------------------
  await context.close();
  await browser.close();
});
const { test, expect } = require('@playwright/test');
const { chromium } = require('@playwright/test');

test('autorec', async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://raivis.work/');
  await page.getByRole('link', { name: 'Podcast' }).click();
  await page.getByRole('link', { name: 'Calculator' }).click();
  await page.getByRole('link', { name: 'Weather' }).click();
  await page.getByRole('link', { name: 'World Clock' }).click();
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
});
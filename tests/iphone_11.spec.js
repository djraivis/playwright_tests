const { test, expect, devices } = require('@playwright/test');

test.use({
  ...devices['viewport-size=1280,900'],
});

test('iPhone 11', async ({ page }) => {
  await page.goto('https://uktvplay.co.uk/');
  await page.getByRole('button', { name: 'YES I ACCEPT' }).click();
  await page.getByRole('link', { name: 'Get Started' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('link', { name: 'A to Z' }).click();
  await page.getByRole('button', { name: 'M' }).click();
  await page.getByRole('button', { name: 'O', exact: true }).click();
  await page.getByRole('button', { name: 'J' }).click();
  await page.getByRole('button', { name: 'G', exact: true }).click();
  await page.getByRole('listitem').filter({ hasText: 'More' }).click();
  await page.locator('#tab-accessibility').click();
  await page.getByRole('link', { name: 'A-Z page' }).click();
  await page.getByRole('button', { name: 'Channels' }).click();
  await page.getByRole('button', { name: 'Categories' }).click();
  await page.getByRole('link', { name: 'Drama', exact: true }).click();
  await page.getByRole('link', { name: 'Box Sets' }).click();
  await page.getByRole('link', { name: 'Bangers and Cash. Category: Factual Entertainment. Description: Behind the scenes of a Yorkshire-based, family-run historic car auction business.' }).click();
  await page.locator('#nav-bar-home').click();
});


const { test, expect, devices } = require('@playwright/test');

test.use({
  ...devices['iPhone 11'],
});

test('iPhone 11', async ({ page }) => {
  await page.goto('https://uktvplay.co.uk/');
  await page.getByRole('button', { name: 'YES I ACCEPT' }).click();
  await page.getByRole('link', { name: 'Get Started' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: 'Main menu' }).click();
  await page.getByRole('link', { name: 'A-Z' }).click();
  await page.getByRole('button', { name: 'H' }).click();
  await page.getByRole('button', { name: 'K' }).click();
  await page.getByRole('button', { name: 'Main menu' }).click();
  await page.locator('#side-nav-back').click();
  await page.getByRole('button', { name: 'Main menu' }).click();
  await page.getByRole('link', { name: 'Home', exact: true }).click();
});
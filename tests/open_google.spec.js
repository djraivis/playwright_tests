import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('button', { name: 'Accept all' }).click();
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('uktvplay');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await page.getByRole('link', { name: 'Register to UKTV Play - Watch TV Shows For Free Ad· https://www.uktvplay.co.uk/' }).click();
  await page.getByRole('button', { name: 'YES I ACCEPT' }).click();
  await page.locator('#nav-bar-home').click();
});
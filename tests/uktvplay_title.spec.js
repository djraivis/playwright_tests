const { test, expect } = require('@playwright/test');

test('UKTVPLAY', async ({ page }) => {
  await page.goto('https://uktvplay.co.uk/');
  await expect(page).toHaveTitle('UKTV Play - Stream FREE On Demand');
});


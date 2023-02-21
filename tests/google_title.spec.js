const { test, expect } = require('@playwright/test');

test('should display "Google" text on page', async ({ page }) => {
  await page.goto('https://www.google.com');
  await expect(page).toHaveTitle('Google');
});

import { test, expect } from '@playwright/test';


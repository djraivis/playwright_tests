// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page, context }) => {

  await context.tracing.start(
    {
      snapshots: true,
      screenshots: true
    }
  );


  await page.goto('https://playwright.dev/');
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
  await context.tracing.stop({ path: 'test1_trace.zip' });
});

test('get started link', async ({ page, context }) => {

  await context.tracing.start(
    {
      snapshots: true,
      screenshots: true
    }
  );

  await page.goto('https://playwright.dev/');
  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();
  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
  await context.tracing.stop({ path: 'test1_trace.zip' });
});



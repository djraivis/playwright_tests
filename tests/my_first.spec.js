const { test, expect } = require('@playwright/test');

// The keyword "async" before the function makes the function return a promise
// The keyword "await" before the function makes the function wait for a promise
// Promoise is something - so we are waiting for return a promise

// Javasript is a asynchronous programming language it means is not happening at the same time.
// async, await will make step by step and not allow to go at the same time everything at the same time
// once one function is laoded and completed - only then a next step/function will run


test('Raivis At Work Test', async ({ page }) => {
  await page.goto('https://raivis.work');
  await expect(page).toHaveTitle('Raivis at Work');
});


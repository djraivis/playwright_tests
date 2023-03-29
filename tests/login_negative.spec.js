const { test, expect } = require('@playwright/test');

test.describe('Negative login tests', () => {
  test.beforeEach(async ({ page }) => {
    // Code to navigate to login page and set up test environment
    await page.goto('https://uktvplay.co.uk/');
    await page.getByRole('button', {name: 'YES I ACCEPT'}).click();
    await page.getByRole('link', { name: 'Account' }).click();
    await page.pause();
  });

  test('Invalid username should display error message', async ({ page }) => {
    // Code to enter invalid username and verify error message is displayed
    await page.getByPlaceholder('Email address').fill('rraivis.gereiss@uktv.co.uk');
    await page.getByPlaceholder('Password').fill('radiO101*');
    await page.getByRole('button', { name: 'Sign in' }).click();
  });

  test('Invalid password should display error message', async ({ page }) => {
    // Code to enter invalid password and verify error message is displayed
    await page.getByPlaceholder('Email address').fill('raivis.gereiss@uktv.co.uk');
    await page.getByPlaceholder('Password').fill('rradiO101*');
    await page.getByRole('button', { name: 'Sign in' }).click();
  });

    // More negative login tests...
});

//   await page.waitForSelector('text=Sign in',{timeout:4000});
//   await expect(page.locator(text='Sign in')).toHaveCount(1);


import {test, expect} from '@playwright/test';


// In login_demo.spec.js:

const { test, expect } = require('@playwright/test');

// Import the test extension from another file
const { loginTests } = require('./login_tests');

// Use the test extension in your test suite
test.describe('Login tests', () => {
  const { beforeEachLogin } = loginTests(expect);

  test.beforeEach(beforeEachLogin);

  test('Positive login tests', async ({ page }) => {
    // Call the test function from the imported file
    await loginTests.positiveTests(page);
  });

  test('Negative login tests', async ({ page }) => {
    // Call the test function from the imported file
    await loginTests.negativeTests(page);
  });
});

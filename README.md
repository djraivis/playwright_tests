# playwright_tests

###### for [UKTVPLAY] website (http://uktvplay.co.uk)

Inside that directory, you can run several commands:

<!-- Runs the end-to-end tests. -->

```
npx playwright test
```

<!-- Runs the tests only on Desktop Chrome. -->

```
npx playwright test --project=chromium
```

<!-- // Runs the tests in a specific file. -->

```
npx playwright test example
```

<!--  // Runs the tests in debug mode. -->

```
 npx playwright test --debug
```

<!--  // Auto generate tests with Codegen. -->

```
npx playwright codegen
```

### We suggest that you begin by typing:

    npx playwright test

And check out the following files:

- ./tests/example.spec.js - Example end-to-end test
- ./tests-examples/demo-todo-app.spec.js - Demo Todo App end-to-end tests
- ./playwright.config.js - Playwright Test configuration

Visit https://playwright.dev/docs/intro for more information. ✨

    Happy hacking! 🎭

### Other Terminal Commands

    npm playwright -v
    npx playwright --help

<!-- show report -->

    npx playwright show-report

<!-- // specify how many workers you woulsd like to run -->

    npx playwright test --workers 3

<!-- everything that contains example -->

    npx playwright test --example

<!-- contains the words "has title" -->

    npx playwright test -g "has title"

<!-- runs only in chromuim -->

    npx playwright test --project=chromium

<!-- retaher than running in the backend in headleass mode by default and if we would like to see we can use the option -- headed -->

    npx playwright test --headed

<!-- This will bring up Playwright Inspector -->

    npx playwright test --debug

<!-- Start a test with specific line, in our case line 23 -->

    npx playwright test example.spec.js:23 --project=chromium --debug

![thumbnail](./assets/running_test.png)

### How to write Tests

![thumbnail](assets/writeTests.png)

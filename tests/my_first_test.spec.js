// This means we don't want to change from a default
// Here we are loading test and expect modules from playwright package
const { test, expect } = require('@playwright/test');

// This is comes from demo/hello.js files, there are functions that I have created.
const { hello, helloWorld } = require('./demo/hello');

// Alternitively I can comment out the line above and write the following code below
// import { hello, helloWorld } from './demo/hello'; // But it didn't work

console.log(hello());
console.log(helloWorld());
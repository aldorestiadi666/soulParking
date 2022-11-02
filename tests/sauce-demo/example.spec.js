// @ts-check
const { test, expect, chromium } = require('@playwright/test');

test('as a user, can load page', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Swag Labs');
});

test('as a user, can login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  const username = await page.locator('[data-test="username"]');
  const password = await page.locator('[data-test="password"]');
  const loginButton = await page.locator('[data-test="login-button"]');

  await username.fill('standard_user');
  await password.fill('secret_sauce');
  await loginButton.click();

  // console.log('ini log: ', page)
  expect(page.url()).toBe('https://www.saucedemo.com/inventory.html');
});

test('as a user, cannot login wrong username', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  const username = await page.locator('[data-test="username"]');
  const password = await page.locator('[data-test="password"]');
  const loginButton = await page.locator('[data-test="login-button"]');

  await username.fill('wrong_username');
  await password.fill('secret_sauce');
  await loginButton.click();

  const errorMessage = await page.locator('[data-test="error"]');

  // console.log('ini log: ', await errorMessage.innerText())
  expect(await errorMessage.innerText()).toBe('Epic sadface: Username and password do not match any user in this service');
});


test('as a user, can add to cart 1 item', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  const username = await page.locator('[data-test="username"]');
  const password = await page.locator('[data-test="password"]');
  const loginButton = await page.locator('[data-test="login-button"]');

  await username.fill('standard_user');
  await password.fill('secret_sauce');
  await loginButton.click();

  // console.log('ini log: ', page)
  expect(page.url()).toBe('https://www.saucedemo.com/inventory.html');

  const addBackpackButton = await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
  await addBackpackButton.click();

  const cartNotif = await page.waitForSelector('.shopping_cart_badge');

  // console.log('ini log: ', await cartNotif.innerText())
  expect(await cartNotif.innerText()).toBe('1');

});

test('as a user, can add to cart 2 item', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  const username = await page.locator('[data-test="username"]');
  const password = await page.locator('[data-test="password"]');
  const loginButton = await page.locator('[data-test="login-button"]');

  await username.fill('standard_user');
  await password.fill('secret_sauce');
  await loginButton.click();

  expect(page.url()).toBe('https://www.saucedemo.com/inventory.html');

  const addBackpackButton = await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
  await addBackpackButton.click();

  const cartNotif = await page.waitForSelector('.shopping_cart_badge');

  expect(await cartNotif.innerText()).toBe('1');

  const addOnesieButton = await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]');
  await addOnesieButton.click();

  expect(await cartNotif.innerText()).toBe('2');



});

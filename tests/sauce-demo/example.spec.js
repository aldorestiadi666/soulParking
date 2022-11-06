// @ts-check
const { test, expect, chromium } = require('@playwright/test');

const delay = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

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
  await setTimeout(()=>{},3000);
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

test('as a user, can add to cart 3 item', async ({ page }) => {
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

  const addLightButton = await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
  await addLightButton.click();

  expect(await cartNotif.innerText()).toBe('3');



});


test('as a user, can add to cart 4 item', async ({ page }) => {
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

  const addLightButton = await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
  await addLightButton.click();

  expect(await cartNotif.innerText()).toBe('3');

  const addTshirtButton = await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
  await addTshirtButton.click();

  expect(await cartNotif.innerText()).toBe('4');


});


test('as a user, can add to cart 5 item', async ({ page }) => {
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

  const addLightButton = await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
  await addLightButton.click();

  expect(await cartNotif.innerText()).toBe('3');

  const addTshirtButton = await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
  await addTshirtButton.click();

  expect(await cartNotif.innerText()).toBe('4');


  const addJackettButton = await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]');
  await addJackettButton.click();

  expect(await cartNotif.innerText()).toBe('5');

});

test('as a user, can add to cart 6 item', async ({ page }) => {
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

  const addLightButton = await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
  await addLightButton.click();

  expect(await cartNotif.innerText()).toBe('3');

  const addTshirtButton = await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
  await addTshirtButton.click();

  expect(await cartNotif.innerText()).toBe('4');


  const addJacketButton = await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]');
  await addJacketButton.click();

  expect(await cartNotif.innerText()).toBe('5');

  const addThingButton = await page.locator('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]');
  await addThingButton.click();

  expect(await cartNotif.innerText()).toBe('6');

});

test('as a user, can add to cart 6 item to finish', async ({ page }) => {
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

  const addLightButton = await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
  await addLightButton.click();

  expect(await cartNotif.innerText()).toBe('3');

  const addTshirtButton = await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
  await addTshirtButton.click();

  expect(await cartNotif.innerText()).toBe('4');


  const addJacketButton = await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]');
  await addJacketButton.click();

  expect(await cartNotif.innerText()).toBe('5');

  const addThingButton = await page.locator('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]');
  await addThingButton.click();

  expect(await cartNotif.innerText()).toBe('6');

  const cartButton = await page.locator('[class="shopping_cart_link"]');
  await cartButton.click();

  expect(page.url()).toBe('https://www.saucedemo.com/cart.html');
  await delay(2000)

  const checkoutButton = await page.locator('#checkout');
  await checkoutButton.click();

  expect(page.url()).toBe('https://www.saucedemo.com/checkout-step-one.html');
  await delay(2000)


  const firstname = await page.locator('#first-name');
  const lastname = await page.locator('#last-name');
  const zip = await page.locator('#postal-code');
  const continueButton = await page.locator('#continue');

  await firstname.fill('aldo');
  await lastname.fill('restiadi');
  await zip.fill('12345');
  await delay(2000)

  await continueButton.click();

  expect(page.url()).toBe('https://www.saucedemo.com/checkout-step-two.html');

  const finishButton = await page.locator('[data-test="finish"]');

  await delay(5000)

  await finishButton.click();

  expect(page.url()).toBe('https://www.saucedemo.com/checkout-complete.html');

  const tittleComplete = await page.locator('#checkout_complete_container >> .complete-header');
  
  expect(await tittleComplete.innerText()).toBe('THANK YOU FOR YOUR ORDER');

  await delay(5000)

});

test('as a user, cannot login locked_out_user', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  const username = await page.locator('[data-test="username"]');
  const password = await page.locator('[data-test="password"]');
  const loginButton = await page.locator('[data-test="login-button"]');

  await username.fill('locked_out_user');
  await password.fill('secret_sauce');
  await loginButton.click();

  const errorMessage = await page.locator('[data-test="error"]');

  // console.log('ini log: ', await errorMessage.innerText())
  expect(await errorMessage.innerText()).toBe('Epic sadface: Sorry, this user has been locked out.');

  
});

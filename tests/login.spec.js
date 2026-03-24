import { test, expect } from '@playwright/test';
test('TC01 - Invalid Login', async ({ page }) => {
  await page.goto('https://medi-schedule--raghubakare143.replit.app/login');
  await page.fill('input[type="email"]', 'wrong@gmail.com');
  await page.fill('input[type="password"]', 'wrong123');
  await page.click('button:has-text("Sign In")');

  await expect(page).toHaveURL(/login/);
});




test('TC2-Empty login validation', async ({ page }) => {

  await page.goto('https://medi-schedule--raghubakare143.replit.app/login');

//  Click login without entering data
  await page.locator('button[type="submit"]').click();

 
  await expect(page).toHaveURL(/login/);


  await expect(page.getByText(/required/i)).toBeVisible();

});

test('TC03 - Invalid Email', async ({ page }) => {
  await page.goto('https://medi-schedule--raghubakare143.replit.app/login');
  await page.getByRole('textbox', { name: 'Email address' }).fill('wrong@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
  await page.getByRole('button', { name: 'Sign In' }).click();

  await expect(page).toHaveURL(/login/);
});


test('TC04 - Invalid Email Format', async ({ page }) => {
  await page.goto('https://medi-schedule--raghubakare143.replit.app/login');
  await page.getByRole('textbox', { name: 'Email address' }).fill('raghu123');
  await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
  await page.getByRole('button', { name: 'Sign In' }).click();

  await expect(page).toHaveURL(/login/);
});


test('TC05 - Password Case Sensitive', async ({ page }) => {
  await page.goto('https://medi-schedule--raghubakare143.replit.app/login');
  await page.getByRole('textbox', { name: 'Email address' }).fill('raghu1@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('raghu@12345');
  await page.getByRole('button', { name: 'Sign In' }).click();

  await expect(page).toHaveURL(/login/);
});



test('TC06 - Email Case Sensitivity', async ({ page }) => {
  await page.goto('https://medi-schedule--raghubakare143.replit.app/login');

  await page.getByRole('textbox', { name: 'Email address' }).fill('RAGHU1@GMAIL.COM');
  await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
  await page.getByRole('button', { name: 'Sign In' }).click();


  await expect(page).toHaveURL(/login/);
});




test('TC7 - Spaces in Input', async ({ page }) => {
  await page.goto('https://medi-schedule--raghubakare143.replit.app/login');
  await page.getByRole('textbox', { name: 'Email address' }).fill(' raghu1@gmail.com ');
  await page.getByRole('textbox', { name: 'Password' }).fill(' Raghu@12345 ');
  await page.getByRole('button', { name: 'Sign In' }).click();

 await expect(page).toHaveURL(/login/);

});



test('TC08-Invalid Email shows error', async ({ page }) => {
  await page.goto('https://medi-schedule--raghubakare143.replit.app/login');

  await page.getByRole('textbox', { name: 'Email address' }).fill('wrong@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');

  await page.getByRole('button', { name: 'Sign In' }).click();

  // Wait until loading disappears (important)
  await page.waitForTimeout(2000); // or better: wait for element

  // Check error message
 await expect(page.locator('text=Invalid email')).toBeVisible();
});


test('TC09-Invalid pass shows error', async ({ page }) => {
  await page.goto('https://medi-schedule--raghubakare143.replit.app/login');

  await page.getByRole('textbox', { name: 'Email address' }).fill('raghu1@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('wrong123');

  await page.getByRole('button', { name: 'Sign In' }).click();

 
  await expect(
  page.getByText('HTTP 401 : Invalid email or password').first()
).toBeVisible();
});

test('TC10 - Clear Email Field', async ({ page }) => {
  await page.goto('https://medi-schedule--raghubakare143.replit.app/login');

  const email = page.getByRole('textbox', { name: 'Email address' });
  await email.fill('raghu1@gmail.com');
  await email.fill('');
  await page.getByRole('button', { name: 'Sign In' }).click();

  await expect(page.locator('text=required')).toBeVisible();
});












// const { test, expect } = require('@playwright/test');
// const assert = require('assert');
// const { LoginPage } = require('../POM/login');

// test('TC01 - Invalid Login', async ({ page }) => {
//   const login = new LoginPage(page);

//   await login.goto();
//   await login.login('wrong@gmail.com', 'wrong123');

//   // expect (UI check)
//   await login.verifyOnLoginPage();

//   // assert (value check)
//   const url = await login.getCurrentUrl();
//   assert(url.includes('login'), 'User should stay on login page');
// });

// test('TC02 - Empty login validation', async ({ page }) => {
//   const login = new LoginPage(page);

//   await login.goto();
//   await login.signInBtn.click();

//   await login.verifyOnLoginPage();

//   // assert
//   const isVisible = await login.isRequiredVisible();
//   assert.strictEqual(isVisible, true, 'Required error should be visible');
// });

// test('TC03 - Invalid Email', async ({ page }) => {
//   const login = new LoginPage(page);

//   await login.goto();
//   await login.login('wrong@gmail.com', 'Raghu@12345');

//   await login.verifyOnLoginPage();

//   const url = await login.getCurrentUrl();
//   assert(url.includes('login'));
// });

// test('TC04 - Invalid Email Format', async ({ page }) => {
//   const login = new LoginPage(page);

//   await login.goto();
//   await login.login('raghu123', 'Raghu@12345');

//   await login.verifyOnLoginPage();
// });

// test('TC05 - Password Case Sensitive', async ({ page }) => {
//   const login = new LoginPage(page);

//   await login.goto();
//   await login.login('raghu1@gmail.com', 'raghu@12345');

//   await login.verifyOnLoginPage();
// });

// test('TC06 - Email Case Sensitivity', async ({ page }) => {
//   const login = new LoginPage(page);

//   await login.goto();
//   await login.login('RAGHU1@GMAIL.COM', 'Raghu@12345');

//   await login.verifyOnLoginPage();
// });

// test('TC07 - Spaces in Input', async ({ page }) => {
//   const login = new LoginPage(page);

//   await login.goto();
//   await login.login(' raghu1@gmail.com ', ' Raghu@12345 ');

//   await login.verifyOnLoginPage();
// });

// test('TC08 - Invalid Email shows error', async ({ page }) => {
//   const login = new LoginPage(page);

//   await login.goto();
//   await login.login('wrong@gmail.com', 'Raghu@12345');

//   // wait for visibility
// await login.invalidEmailError.waitFor();

// // expect
// await expect(login.invalidEmailError).toBeVisible();

// // assert
// const visible = await login.isInvalidEmailVisible();
// assert.strictEqual(visible, true);
// });

// test('TC09 - Invalid pass shows error', async ({ page }) => {
//   const login = new LoginPage(page);

//   await login.goto();
//   await login.login('raghu1@gmail.com', 'wrong123');

//   // expect
//   await expect(login.invalidLoginError.first()).toBeVisible();

//   // assert
//   const visible = await login.isInvalidLoginVisible();
//   assert.strictEqual(visible, true);
// });

// test('TC10 - Clear Email Field', async ({ page }) => {
//   const login = new LoginPage(page);

//   await login.goto();
//   await login.login('raghu1@gmail.com', 'Raghu@12345');

//   await login.email.fill('');
//   await login.signInBtn.click();

//   // expect
//   await expect(login.requiredError).toBeVisible();

//   // assert
//   const visible = await login.isRequiredVisible();
//   assert(visible);
// });
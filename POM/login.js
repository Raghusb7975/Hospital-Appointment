// // export class LoginPage {
// //   constructor(page) {
// //     this.page = page;

// //     // Locators
// //     this.email = page.getByRole('textbox', { name: 'Email address' });
// //     this.password = page.getByRole('textbox', { name: 'Password' });
// //     this.signInBtn = page.getByRole('button', { name: 'Sign In' });

// //     this.requiredError = page.getByText(/required/i);
// //     this.invalidEmailError = page.locator('text=Invalid email');
// //     this.invalidCredError = page.getByText('HTTP 401 : Invalid email or password').first();
// //   }

// //   async goto() {
// //     await this.page.goto('https://medi-schedule--raghubakare143.replit.app/login');
// //   }

// //   async login(email, password) {
// //     await this.email.fill(email);
// //     await this.password.fill(password);
// //     await this.signInBtn.click();
// //   }

// //   async clickLoginWithoutData() {
// //     await this.signInBtn.click();
// //   }
// // }



// const { expect } = require('@playwright/test');

// class LoginPage {
//   constructor(page) {
//     this.page = page;

//     this.email = page.getByRole('textbox', { name: 'Email address' });
//     this.password = page.getByRole('textbox', { name: 'Password' });
//     this.signInBtn = page.getByRole('button', { name: 'Sign In' });

//     this.requiredError = page.getByText(/required/i);
//     this.invalidEmailError = page.locator('text=HTTP 401 : Invalid email or password');
//     this.invalidLoginError = page.getByText('HTTP 401 : Invalid email or password');
//   }

//   async goto() {
//     await this.page.goto('https://medi-schedule--raghubakare143.replit.app/login');
//   }

//   async login(email, password) {
//     await this.email.fill(email);
//     await this.password.fill(password);
//     await this.signInBtn.click();
//   }

//   async getCurrentUrl() {
//     return this.page.url();
//   }

//   async isRequiredVisible() {
//     return await this.requiredError.isVisible();
//   }

//   async isInvalidEmailVisible() {
//     return await this.invalidEmailError.isVisible();
//   }

//   async isInvalidLoginVisible() {
//     return await this.invalidLoginError.first().isVisible();
//   }

//   // Playwright expect validations
//   async verifyOnLoginPage() {
//     await expect(this.page).toHaveURL(/login/);
//   }
// }

// module.exports = { LoginPage };
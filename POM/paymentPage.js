// export class PaymentPage {
//   constructor(page) {
//     this.page = page;

//     // Login
//     this.loginBtn = page.getByRole('button', { name: 'Log in' });
//     this.email = page.getByRole('textbox', { name: 'Email address' });
//     this.password = page.getByRole('textbox', { name: 'Password' });
//     this.signInBtn = page.getByRole('button', { name: 'Sign In' });

//     // Navigation
//     this.cartLink = page.getByRole('link', { name: 'Appointments Cart' });
//     this.checkoutBtn = page.getByRole('button', { name: 'Proceed to Checkout' });

//     // Payment fields
//     this.cardNumber = page.getByRole('textbox', { name: 'Card Number *' });
//     this.cardName = page.getByRole('textbox', { name: 'Cardholder Name *' });
//     this.expiry = page.getByRole('textbox', { name: 'Expiry Date *' });
//     this.cvv = page.getByRole('textbox', { name: 'CVV *(3 digits)' });

//     this.payBtn = page.getByRole('button', { name: /Pay/ });

//     // Payment methods
//     this.debitOption = page.getByRole('button', { name: /Debit Card/ });
//     this.clinicOption = page.getByRole('button', { name: /Pay at Clinic/ });
//     this.confirmBooking = page.getByRole('button', { name: /Confirm Booking/ });

//     this.insuranceOption = page.getByRole('button', { name: /Health Insurance/ });
//     this.insuranceProvider = page.getByRole('textbox', { name: 'Insurance Provider *' });
//     this.policyNumber = page.getByRole('textbox', { name: /Policy Number/ });
//     this.memberId = page.getByRole('textbox', { name: 'Member ID *' });
//     this.groupNumber = page.getByRole('textbox', { name: 'Group Number (optional)' });
//     this.submitInsurance = page.getByRole('button', { name: /Submit Insurance/ });
//   }

//   async goto() {
//     await this.page.goto('https://medi-schedule--raghubakare143.replit.app/');
//   }

//   async login(email, password) {
//     await this.loginBtn.click();
//     await this.email.fill(email);
//     await this.password.fill(password);
//     await this.signInBtn.click();
//   }

//   async goToCheckout() {
//     await this.cartLink.click();
//     await this.checkoutBtn.click();
//   }

//   async fillCardDetails(number, name, expiry, cvv) {
//     await this.cardNumber.fill(number);
//     await this.cardName.fill(name);
//     await this.expiry.fill(expiry);
//     await this.cvv.fill(cvv);
//   }

//   async clickPay() {
//     await this.payBtn.click();
//   }

//   async selectDebit() {
//     await this.debitOption.click();
//   }

//   async selectClinicPay() {
//     await this.clinicOption.click();
//   }

//   async confirmClinicBooking() {
//     await this.confirmBooking.click();
//   }

//   async selectInsurance() {
//     await this.insuranceOption.click();
//   }

//   async fillInsurance(provider, policy, member, group) {
//     await this.insuranceProvider.fill(provider);
//     await this.policyNumber.fill(policy);
//     await this.memberId.fill(member);
//     if (group) await this.groupNumber.fill(group);
//   }

//   async submitInsuranceClaim() {
//     await this.submitInsurance.click();
//   }
// }




// import { expect } from '@playwright/test';

// export class PaymentPage {
//   constructor(page) {
//     this.page = page;

//     // Login
//     this.email = page.locator('#email');
//     this.password = page.locator('#password');
//     this.loginBtn = page.getByRole('button', { name: /login/i });

//     // Navigation
//     this.cartLink = page.getByRole('link', { name: /cart/i });

//     // ✅ FIXED locator (use flexible match)
//     this.checkoutBtn = page.getByRole('button', { name: /checkout/i });

//     // Payment fields
//     this.cardNumber = page.locator('#cardNumber');
//     this.cardName = page.locator('#cardName');
//     this.expiry = page.locator('#expiry');
//     this.cvv = page.locator('#cvv');

//     this.payBtn = page.getByRole('button', { name: /pay/i });
//   }

//   async goto() {
//     await this.page.goto('http://localhost:3000'); // change if needed
//   }

//   async login(email, password) {
//     await this.email.fill(email);
//     await this.password.fill(password);
//     await this.loginBtn.click();

//     // ✅ wait for dashboard/home
//     await this.page.waitForLoadState('networkidle');
//   }

//   async goToCheckout() {
//     // click cart
//     await this.cartLink.click();

//     // ✅ wait for cart page
//     await this.page.waitForLoadState('networkidle');

//     // ✅ ensure button is visible before click
//     await expect(this.checkoutBtn).toBeVisible({ timeout: 10000 });

//     await this.checkoutBtn.click();

//     // ✅ wait for payment page
//     await this.page.waitForLoadState('networkidle');
//   }

//   async fillCardDetails(number, name, expiry, cvv) {
//     await this.cardNumber.fill(number);
//     await this.cardName.fill(name);
//     await this.expiry.fill(expiry);
//     await this.cvv.fill(cvv);
//   }

//   async clickPay() {
//     await expect(this.payBtn).toBeVisible();
//     await this.payBtn.click();
//   }
// }
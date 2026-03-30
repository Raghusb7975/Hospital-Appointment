// import { test, expect } from '@playwright/test';
// import { PaymentPage } from '../POM/paymentPage';

// test.beforeEach(async ({ page }) => {
//   const payment = new PaymentPage(page);

//   await payment.goto();

//   // ✅ login
//   await payment.login('raghu01@gmail.com', 'Raghu@12345');

//   // ✅ IMPORTANT FIX: wait before checkout
//   await payment.goToCheckout();
// });


// // ✅ 1 Valid Payment
// test('TC01 - Valid card payment', async ({ page }) => {
//   const p = new PaymentPage(page);
//   await p.fillCardDetails('4111111111111111', 'Raghu', '12/28', '123');
//   await p.clickPay();
// });


// // ✅ 2 Empty form
// test('TC02 - Empty payment form', async ({ page }) => {
//   const p = new PaymentPage(page);
//   await p.clickPay();
// });


// // ✅ 3 Invalid card number
// test('TC03 - Invalid card number', async ({ page }) => {
//   const p = new PaymentPage(page);
//   await p.fillCardDetails('1111', 'Raghu', '12/28', '123');
//   await p.clickPay();
// });


// // ✅ 4 Expired card
// test('TC04 - Expired card', async ({ page }) => {
//   const p = new PaymentPage(page);
//   await p.fillCardDetails('4111111111111111', 'Raghu', '01/20', '123');
//   await p.clickPay();
// });


// // ✅ 5 Invalid CVV
// test('TC05 - Invalid CVV', async ({ page }) => {
//   const p = new PaymentPage(page);
//   await p.fillCardDetails('4111111111111111', 'Raghu', '12/28', '1');
//   await p.clickPay();
// });


// // ✅ 6 Missing name
// test('TC06 - Missing cardholder name', async ({ page }) => {
//   const p = new PaymentPage(page);
//   await p.fillCardDetails('4111111111111111', '', '12/28', '123');
//   await p.clickPay();
// });


// // ✅ 7 Special characters in name
// test('TC07 - Special characters in name', async ({ page }) => {
//   const p = new PaymentPage(page);
//   await p.fillCardDetails('4111111111111111', '@@@@', '12/28', '123');
//   await p.clickPay();
// });


// // ✅ 8 Double click pay
// test('TC08 - Double click pay', async ({ page }) => {
//   const p = new PaymentPage(page);
//   await p.fillCardDetails('4111111111111111', 'Raghu', '12/28', '123');
//   await p.clickPay();
//   await p.clickPay();
// });


// // ✅ 9 Debit option
// test('TC09 - Debit card option', async ({ page }) => {
//   const p = new PaymentPage(page);
//   await p.selectDebit();
// });


// // ✅ 10 Clinic payment
// test('TC10 - Pay at clinic', async ({ page }) => {
//   const p = new PaymentPage(page);
//   await p.selectClinicPay();
//   await p.confirmClinicBooking();
// });


// // ✅ 11 Insurance basic
// test('TC11 - Insurance claim', async ({ page }) => {
//   const p = new PaymentPage(page);
//   await p.selectInsurance();
//   await p.fillInsurance('ABC Insurance', '123456', 'MEM001', 'GRP01');
//   await p.submitInsuranceClaim();
// });


// // ✅ 12 Insurance without group
// test('TC12 - Insurance without group number', async ({ page }) => {
//   const p = new PaymentPage(page);
//   await p.selectInsurance();
//   await p.fillInsurance('ABC Insurance', '123456', 'MEM001');
//   await p.submitInsuranceClaim();
// });


// // ✅ 13 Invalid policy
// test('TC13 - Short policy number', async ({ page }) => {
//   const p = new PaymentPage(page);
//   await p.selectInsurance();
//   await p.fillInsurance('ABC', '123', 'MEM001');
//   await p.submitInsuranceClaim();
// });


// // ✅ 14 Missing insurance provider
// test('TC14 - Missing insurance provider', async ({ page }) => {
//   const p = new PaymentPage(page);
//   await p.selectInsurance();
//   await p.fillInsurance('', '123456', 'MEM001');
//   await p.submitInsuranceClaim();
// });


// // ✅ 15 Refresh before pay
// test('TC15 - Refresh before payment', async ({ page }) => {
//   await page.reload();
// });


// // ✅ 16 Navigate back
// test('TC16 - Navigate back to cart', async ({ page }) => {
//   await page.goBack();
// });


// // ✅ 17 Multiple checkout clicks
// test('TC17 - Multiple checkout clicks', async ({ page }) => {
//   const p = new PaymentPage(page);
//   await p.goToCheckout();
//   await p.goToCheckout();
// });


// // ✅ 18 Invalid expiry format
// test('TC18 - Invalid expiry format', async ({ page }) => {
//   const p = new PaymentPage(page);
//   await p.fillCardDetails('4111111111111111', 'Raghu', '1228', '123');
//   await p.clickPay();
// });


// // ✅ 19 Large CVV
// test('TC19 - CVV more than 3 digits', async ({ page }) => {
//   const p = new PaymentPage(page);
//   await p.fillCardDetails('4111111111111111', 'Raghu', '12/28', '12345');
//   await p.clickPay();
// });


// // ✅ 20 Empty CVV
// test('TC20 - Empty CVV', async ({ page }) => {
//   const p = new PaymentPage(page);
//   await p.fillCardDetails('4111111111111111', 'Raghu', '12/28', '');
//   await p.clickPay();
// });


// // ✅ 21 Empty expiry
// test('TC21 - Empty expiry date', async ({ page }) => {
//   const p = new PaymentPage(page);
//   await p.fillCardDetails('4111111111111111', 'Raghu', '', '123');
//   await p.clickPay();
// });
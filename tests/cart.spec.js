// import { test, expect } from '@playwright/test';
// import { CartPage } from '../POM/cartPage'; // Adjust the path if needed

// // URL and credentials
// const loginURL = 'https://medi-schedule--raghubakare143.replit.app/login';
// const cartURL = 'https://medi-schedule--raghubakare143.replit.app/cart';
// const email = 'raghu01@gmail.com';
// const password = 'Raghu12345';

// test.describe('Cart Page Tests', () => {
//   let cartPage;

//   // Before each test, login and navigate to the cart page
//   test.beforeEach(async ({ page }) => {
//     // Login to the application
//     await page.goto('https://medi-schedule--raghubakare143.replit.app/login');
//     await page.fill('input[name="email"]', email); // Adjust selector as necessary
//     await page.fill('input[name="password"]', password); // Adjust selector as necessary
//     await page.click('button[type="submit"]'); // Adjust if needed

//     // Wait for redirection after login
//     await page.waitForURL('https://medi-schedule--raghubakare143.replit.app/dashboard'); // Modify if different

//     // Instantiate the CartPage object
//     cartPage = new CartPage(page);

//     // Navigate to the Cart page
//     await cartPage.navigateToCart();
//   });

//   test('TC01 - Cart Page should load correctly', async () => {
//     // Assert cart header is visible
//     await expect(cartPage.cartHeader).toBeVisible();
//   });

//   test('TC02 - Cart should have at least one item', async () => {
//     // Check if the cart has items
//     const itemCount = await cartPage.getCartItems();
//     expect(itemCount).toBeGreaterThan(0);
//   });

//   test('TC03 - Item in Cart should display correct title', async () => {
//     // Add your logic to verify the item title
//     const firstItemTitle = await cartPage.page.locator('.cart-item-title').first().textContent();
//     expect(firstItemTitle).toBe('Expected Item Title'); // Modify based on actual content
//   });

//   test('TC04 - Remove item from Cart', async () => {
//     // Interact with item removal button (adjust locator as necessary)
//     const removeButton = cartPage.page.locator('.remove-item-button').first();
//     await removeButton.click();
//     await expect(cartPage.cartItems).toHaveCount(0); // Assuming one item was removed
//   });

//   test('TC05 - Subtotal should match the correct amount', async () => {
//     // Add logic to check the subtotal displayed on the cart page
//     const subtotal = await cartPage.page.locator('.subtotal').textContent(); // Adjust the selector
//     expect(subtotal).toBe('Expected Subtotal Amount'); // Modify with the actual expected amount
//   });

//   test('TC06 - Platform fee should be displayed correctly', async () => {
//     // Add logic to check platform fee
//     const platformFee = await cartPage.page.locator('.platform-fee').textContent(); // Adjust the selector
//     expect(platformFee).toBe('Expected Platform Fee'); // Modify as necessary
//   });

//   test('TC07 - Total Due should be calculated correctly', async () => {
//     // Add logic to check the total due
//     const totalDue = await cartPage.page.locator('.total-due').textContent(); // Adjust the selector
//     expect(totalDue).toBe('Expected Total Due'); // Modify with expected value
//   });

//   test('TC08 - Proceed to Checkout button should navigate to checkout', async () => {
//     await cartPage.isCheckoutButtonVisible(); // Check if button is visible
//     await cartPage.page.click(cartPage.checkoutButton);
//     await page.waitForURL('https://medi-schedule--raghubakare143.replit.app/checkout'); // Adjust if necessary
//   });

//   // Add more tests as necessary based on the CartPage functionality
// });
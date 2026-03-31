import { test, expect } from '@playwright/test';

// test('check if cart is empty or not', async ({ page }) => {
//   await page.goto('https://medi-schedule--raghubakare143.replit.app/login');
  
//   // Log in to the app
//   await page.getByRole('textbox', { name: 'Email address' }).click();
//   await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
//   await page.getByRole('textbox', { name: 'Password' }).click();
//   await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
//   await page.getByRole('button', { name: 'Sign In' }).click();
  
//   // Navigate to the Appointments Cart
//   await page.getByRole('link', { name: 'Appointments Cart' }).click();
  
//   // Check if the cart is empty
//   const emptyCartHeading = page.locator('h1', { hasText: 'Your cart is empty' });
//   const cartHeading = page.locator('h1', { hasText: 'Your Appointments Cart' });
  
//   if (await emptyCartHeading.isVisible()) {
//     // Cart is empty
//     console.log("Cart is empty");
//     await page.getByText("Looks like you haven't added").click(); // Optional: Handle the empty cart scenario
//     // Add assertions if needed
//     await expect(emptyCartHeading).toBeVisible();
//   } else {
//     // Cart is not empty
//     console.log("Cart has items");
//     await page.getByRole('heading', { name: 'Your Appointments Cart' }).click(); // Continue with non-empty cart actions
//     // Add assertions for non-empty cart if needed
//     await expect(cartHeading).toBeVisible();
//   }
// });
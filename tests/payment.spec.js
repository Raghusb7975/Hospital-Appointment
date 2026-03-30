import { test, expect } from '@playwright/test';

test('test01 - Pay button validation without card number', async ({ page }) => {
  // Navigate to login page
  await page.goto('https://medi-schedule--raghubakare143.replit.app/login');
  
  // Sign in
  await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
  await page.getByRole('button', { name: 'Sign In' }).click();
  
  // Navigate to the Appointments Cart and proceed to checkout
  await page.getByRole('link', { name: 'Appointments Cart' }).click();
  await page.getByRole('button', { name: 'Proceed to Checkout' }).click();
  
  // Click on the payment method and fill other fields
  await page.getByRole('button', { name: 'Credit Card Visa, Mastercard' }).click();
  await page.getByRole('textbox', { name: 'Cardholder Name *' }).fill('raghu s b');
  await page.getByRole('textbox', { name: 'Expiry Date *' }).fill('09/67');
  await page.getByRole('textbox', { name: 'CVV *(3 digits)' }).fill('123');
  
  // Click on the "Pay $105.00 Securely" button without entering the card number
  await page.getByRole('button', { name: 'Pay $105.00 Securely' }).click();

  const errorMessage = await page.locator('main span:has-text("Card number is required")');
  await expect(errorMessage).toBeVisible();  // Ensure the error message is visible
});


test('test02-Check that the validation  message  card number with less than 16 digits is visible', async ({ page }) => {
  await page.goto('https://medi-schedule--raghubakare143.replit.app/login');
  
  // Log in
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
  await page.getByRole('button', { name: 'Sign In' }).click();
  
  // Go to Appointment Cart and Checkout
  await page.getByRole('link', { name: 'Appointments Cart' }).click();
  await page.getByRole('button', { name: 'Proceed to Checkout' }).click();
  
  // Fill the card number with less than 16 digits
  await page.getByRole('textbox', { name: 'Card Number *' }).click();
  await page.getByRole('textbox', { name: 'Card Number *' }).fill('1234 5678 89');
  
  // Click on the Expiry Date field to trigger validation
  await page.getByRole('textbox', { name: 'Expiry Date *' }).click();
  
  // Check that the validation message is visible
  const validationMessage = await page.locator('text=Card number must be exactly 16 digits');
  await expect(validationMessage).toBeVisible();  // Ensure the validation message appears
});


test('test03-Check that the validation  message Cardholder Name is empty ', async ({ page }) => {
  await page.goto('https://medi-schedule--raghubakare143.replit.app/login');
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Appointments Cart' }).click();
  await page.getByRole('button', { name: 'Proceed to Checkout' }).click();
  await page.getByRole('textbox', { name: 'Card Number *' }).click();
  await page.getByRole('textbox', { name: 'Card Number *' }).fill('1287 8464 8837 3432');
  await page.getByRole('textbox', { name: 'Cardholder Name *' }).click();
  await page.getByRole('textbox', { name: 'Cardholder Name *' }).fill('');
  await page.getByRole('textbox', { name: 'Expiry Date *' }).click();
  await page.getByText('Cardholder name is required.').click();

  const validationMessage = await page.locator('text=Cardholder name is required.');
  await expect(validationMessage).toBeVisible();  // Ensure the validation message appears
});

// test('test', async ({ page }) => {
//   await page.goto('https://medi-schedule--raghubakare143.replit.app/login');
//   await page.getByRole('textbox', { name: 'Email address' }).click();
//   await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
//   await page.getByRole('textbox', { name: 'Password' }).click();
//   await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@7975');
//   await page.getByRole('textbox', { name: 'Password' }).click();
//   await page.getByRole('textbox', { name: 'Password' }).click();
//   await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.getByRole('link', { name: 'Appointments Cart' }).click();
//   await page.getByRole('button', { name: 'Proceed to Checkout' }).click();
//   await page.getByRole('textbox', { name: 'Card Number *' }).click();
//   await page.getByRole('textbox', { name: 'Card Number *' }).fill('6789 8765 6788 7657');
//   await page.getByRole('textbox', { name: 'Expiry Date *' }).click();
//   await page.getByRole('textbox', { name: 'Expiry Date *' }).fill('09/56');
//   await page.getByRole('textbox', { name: 'CVV *(3 digits)' }).click();
//   await page.getByRole('textbox', { name: 'CVV *(3 digits)' }).fill('12');
//   await page.getByRole('button', { name: 'Pay $105.00 Securely' }).click();
//   await page.getByRole('main').getByText('CVV must be exactly 3 digits.').click();
//    const validationMessage = await page.locator('text=CVV must be exactly 3 digits.');
//   await expect(validationMessage).toBeVisible();  // Ensure the validation message appears
// });
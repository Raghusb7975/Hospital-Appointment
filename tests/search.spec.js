import { test, expect } from '@playwright/test';

// test('test01- search a doctor name', async ({ page }) => {
//   await page.goto('https://medi-schedule--raghubakare143.replit.app/login');

//   await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
//   await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
  

//   await page.getByRole('button', { name: 'Sign In' }).click();

//   await page.getByRole('link', { name: 'Find Doctors' }).click();

//   await page.getByRole('textbox', { name: 'Search by name, specialty or' }).fill('Dr. Michael Chen');
//   await page.getByRole('button', { name: 'Search' })

//   const doctorName = page.locator('h3', { hasText: 'Dr. Michael Chen' });
//   await expect(doctorName).toBeVisible(); 
// // });
// test('test  Verify that text "Showing 10 doctors" to appear or not', async ({ page }) => {
//   await page.goto('https://medi-schedule--raghubakare143.replit.app/login');
  
//   await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
//   await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
  
  
//   await page.getByRole('button', { name: 'Sign In' }).click();

//   await page.getByRole('link', { name: 'Find Doctors' }).click();

//   const doctorsText = page.locator('text=Showing 10 doctors');
//   await expect(doctorsText).toBeVisible(); 

// })

test('TC02 - Verify Empty Search Query', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://medi-schedule--raghubakare143.replit.app');
  
  // Wait for the email input to be available before interacting with it
  await page.getByRole('textbox', { name: 'Email address' }).waitFor({ timeout: 60000, state: 'visible' });
  
  // Fill in the email and password, and sign in
  await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
  await page.getByRole('button', { name: 'Sign In' }).click();
  
  // Wait for the page to load completely
  await page.waitForLoadState('load');

  // Click on the search button with an empty query
  await page.getByRole('button', { name: 'Search' }).click();

  // Validate the error message for an empty search query
  await expect(page.getByText('Please enter a search query')).toBeVisible();
});
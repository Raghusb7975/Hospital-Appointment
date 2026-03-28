import { test, expect } from '@playwright/test';

test('test01- search a doctor name', async ({ page }) => {
  await page.goto('https://medi-schedule--raghubakare143.replit.app/login');

  await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
  

  await page.getByRole('button', { name: 'Sign In' }).click();

  await page.getByRole('link', { name: 'Find Doctors' }).click();

  await page.getByRole('textbox', { name: 'Search by name, specialty or' }).fill('Dr. Michael Chen');
  await page.getByRole('button', { name: 'Search' })

  const doctorName = page.locator('h3', { hasText: 'Dr. Michael Chen' });
  await expect(doctorName).toBeVisible(); 
});
test('test  Verify that text "Showing 10 doctors" to appear or not', async ({ page }) => {
  await page.goto('https://medi-schedule--raghubakare143.replit.app/login');
  
  await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
  
  
  await page.getByRole('button', { name: 'Sign In' }).click();

  await page.getByRole('link', { name: 'Find Doctors' }).click();

  const doctorsText = page.locator('text=Showing 10 doctors');
  await expect(doctorsText).toBeVisible(); 

})

test('test02-Check if doctor named "raghu" shows up', async ({ page }) => {
  // Navigate to login page
  await page.goto('https://medi-schedule--raghubakare143.replit.app/login');

  // Enter email
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
  await page.getByRole('textbox', { name: 'Email address' }).press('Tab');

  // Enter password and login
  await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
  await page.getByRole('button', { name: 'Sign In' }).click();

  // Navigate to 'Find Doctors'
  await page.getByRole('link', { name: 'Find Doctors' }).click();

  // Perform the search for "raghu"
  await page.getByRole('textbox', { name: 'Search by name, specialty or' }).click();
  await page.getByRole('textbox', { name: 'Search by name, specialty or' }).fill('raghu');

  // Check if the results contain the name 'raghu' or 'No doctors found'
  const searchResults = await page.locator('text=No doctors found'); // Check if "No doctors found" message appears
  const doctorResults = await page.locator('text=raghu'); // Check if any doctor with the name 'raghu' appears
  
  // If "No doctors found" is visible, assert that there are no doctor results
  if (await searchResults.isVisible()) {
    console.log('No doctors found');
    await expect(searchResults).toBeVisible(); // Make sure the "No doctors found" message appears
  } else {
    // If doctors are found, assert the result contains "raghu"
    await expect(doctorResults).toHaveText(/raghu/i); // Case-insensitive search for 'raghu'
  }
});



// test('TC04 - Verify Search by Specialization', async ({ page }) => {
//   await page.goto('https://medi-schedule--raghubakare143.replit.app');


//   await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
//   await page.getByRole('textbox', { name: 'Email address' }).press('Tab');

//   // Enter password and login
//   await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
//   await page.getByRole('button', { name: 'Sign In' }).click();

//   // Navigate to 'Find Doctors'
//   await page.getByRole('link', { name: 'Find Doctors' }).click();
//   await page.getByRole('textbox', { name: 'Search by specialization' }).fill('Cardiology');
//   await page.getByRole('button', { name: 'Search' });
//   await expect(page).toHaveURL(/search-results/);
//   await expect(page.getByText('Cardiology')).toBeVisible();
// });
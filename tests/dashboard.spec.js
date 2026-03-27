import { test, expect } from '@playwright/test';

test('TC01 - Navigate to Find Doctors from Dashboard', async ({ page }) => {
  // 🔹 Login
  await page.goto('https://medi-schedule--raghubakare143.replit.app/login');

  await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
  await page.getByRole('button', { name: 'Sign In' }).click();

  // 🔹 Ensure dashboard loaded
  await expect(page).toHaveURL(/dashboard/);

  // 🔹 Click "Find Doctors"
  await page.getByRole('link', { name: 'Find Doctors' }).click();

  await expect(page).toHaveURL(/doctor/i);

});




test('TC02 - Appointments Cart heading should be visible', async ({ page }) => {
  // 🔹 Login
  await page.goto('https://medi-schedule--raghubakare143.replit.app/login');

  await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Appointments Cart' }).click();
  const heading = page.getByRole('heading', { name: 'Your Appointments Cart' });
  await expect(heading).toBeVisible();
  await expect(heading).toHaveText('Your Appointments Cart');
});


test('TC03 - Validate Upcoming Appointments or Empty Message', async ({ page }) => {

  
  await page.goto('https://medi-schedule--raghubakare143.replit.app/login');

  await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
  await page.getByRole('button', { name: 'Sign In' }).click();

  await page.getByRole('tab', { name: 'Upcoming' }).click();
  await page.waitForTimeout(2000);

  const noData = page.getByText('No upcoming appointments');

  if (await noData.count() > 0) {
    await expect(noData).toBeVisible();
  } else {
    await expect(
      page.getByText(/appointment/i).first()
    ).toBeVisible();
  }

});


test('TC04 - Verify Name and Phone Number fields in Profile', async ({ page }) => {

  // 🔹 Login
  await page.goto('https://medi-schedule--raghubakare143.replit.app/login');

  await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
  await page.getByRole('button', { name: 'Sign In' }).click();

  // 🔹 Open Profile
  await page.getByRole('button', { name: 'Profile' }).click();

  // 🔹 Locators
  const nameField = page.getByRole('textbox', { name: 'Full Name' });
  const phoneField = page.getByRole('textbox', { name: 'Phone Number' });
  await nameField.fill('Raghu');
  await phoneField.fill('9876543210');

  await expect(nameField).toHaveValue('Raghu');
  await expect(phoneField).toHaveValue('9876543210');
});





test('TC05 - Validate Past Records or Empty Message', async ({ page }) => {

  // 🔹 Login
  await page.goto('https://medi-schedule--raghubakare143.replit.app/login');

  await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('tab', { name: 'Past Records' }).click();

  // 🔹 Wait for UI
  await page.waitForTimeout(2000);

  // 🔹 Locator for empty message
  const noRecords = page.getByText('No past records found.');


  if (await noRecords.count() > 0) {
    await expect(noRecords).toBeVisible();
  } else {
    await expect(
      page.getByText(/record/i).first()
    ).toBeVisible();
  }

});


  


test('TC06 - Verify Doctor Name in Upcoming Appointments', async ({ page }) => {
  // 🔹 Login to the application
  await page.goto('https://medi-schedule--raghubakare143.replit.app/login');
  await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
  await page.getByRole('button', { name: 'Sign In' }).click();

  // 🔹 Navigate to the 'Upcoming' tab
  await page.getByRole('tab', { name: 'Upcoming' }).click();

  // 🔹 Click on a doctor's name (verify that the doctor’s name matches)
  const doctorName = 'Dr. Priya Patel';
  await page.getByRole('heading', { name: doctorName }).click();

  // 🔹 Check if the doctor's name is visible on the page
  await expect(page.getByRole('heading', { name: doctorName })).toBeVisible();
});



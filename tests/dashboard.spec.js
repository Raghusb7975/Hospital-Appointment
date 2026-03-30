// import { test, expect } from '@playwright/test';

// test('TC01 - Navigate to Find Doctors from Dashboard', async ({ page }) => {
//   // 🔹 Login
//   await page.goto('https://medi-schedule--raghubakare143.replit.app/login');

//   await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
//   await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
//   await page.getByRole('button', { name: 'Sign In' }).click();

//   // 🔹 Ensure dashboard loaded
//   await expect(page).toHaveURL(/dashboard/);

//   // 🔹 Click "Find Doctors"
//   await page.getByRole('link', { name: 'Find Doctors' }).click();

//   await expect(page).toHaveURL(/doctor/i);

// });




// test('TC02 - Appointments Cart heading should be visible', async ({ page }) => {
//   // 🔹 Login
//   await page.goto('https://medi-schedule--raghubakare143.replit.app/login');

//   await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
//   await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.getByRole('link', { name: 'Appointments Cart' }).click();
//   const heading = page.getByRole('heading', { name: 'Your Appointments Cart' });
//   await expect(heading).toBeVisible();
//   await expect(heading).toHaveText('Your Appointments Cart');
// });


// test('TC03 - Validate Upcoming Appointments or Empty Message', async ({ page }) => {

  
//   await page.goto('https://medi-schedule--raghubakare143.replit.app/login');

//   await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
//   await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
//   await page.getByRole('button', { name: 'Sign In' }).click();

//   await page.getByRole('tab', { name: 'Upcoming' }).click();
//   await page.waitForTimeout(2000);

//   const noData = page.getByText('No upcoming appointments');

//   if (await noData.count() > 0) {
//     await expect(noData).toBeVisible();
//   } else {
//     await expect(
//       page.getByText(/appointment/i).first()
//     ).toBeVisible();
//   }

// });


// test('TC04 - Verify Name and Phone Number fields in Profile', async ({ page }) => {

//   // 🔹 Login
//   await page.goto('https://medi-schedule--raghubakare143.replit.app/login');

//   await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
//   await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
//   await page.getByRole('button', { name: 'Sign In' }).click();

//   // 🔹 Open Profile
//   await page.getByRole('button', { name: 'Profile' }).click();

//   // 🔹 Locators
//   const nameField = page.getByRole('textbox', { name: 'Full Name' });
//   const phoneField = page.getByRole('textbox', { name: 'Phone Number' });
//   await nameField.fill('Raghu');
//   await phoneField.fill('9876543210');

//   await expect(nameField).toHaveValue('Raghu');
//   await expect(phoneField).toHaveValue('9876543210');
// });





// test('TC05 - Validate Past Records or Empty Message', async ({ page }) => {

//   // 🔹 Login
//   await page.goto('https://medi-schedule--raghubakare143.replit.app/login');

//   await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
//   await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.getByRole('tab', { name: 'Past Records' }).click();

//   // 🔹 Wait for UI
//   await page.waitForTimeout(2000);

//   // 🔹 Locator for empty message
//   const noRecords = page.getByText('No past records found.');


//   if (await noRecords.count() > 0) {
//     await expect(noRecords).toBeVisible();
//   } else {
//     await expect(
//       page.getByText(/record/i).first()
//     ).toBeVisible();
//   }

// });


  
// test('TC06 - Verify Doctor Name in Upcoming Appointments', async ({ page }) => {
//   // 🔹 Login to the application
//   await page.goto('https://medi-schedule--raghubakare143.replit.app/login');
//   await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
//   await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
//   await page.getByRole('button', { name: 'Sign In' }).click();
  
//   // 🔹 Navigate to Upcoming appointments
//   await page.getByRole('tab', { name: 'Upcoming' }).click();
  
//   // 🔹 Verify the doctor's name
//   const doctorName = await page.getByRole('heading', { name: 'Dr. Michael Chen' }).textContent();
  
//   // Check if the doctor's name matches the expected value
//   expect(doctorName).toBe('Dr. Michael Chen');
// });



const { test, expect } = require('@playwright/test');
const { DashboardPage } = require('../POM/dashboardPage');

test.beforeEach(async ({ page }) => {
  const dash = new DashboardPage(page);
  await dash.goto();
  await dash.login('raghu01@gmail.com', 'Raghu@12345');
  await dash.goToDashboard();
});


// ✅ 1
test('TC01 - Dashboard loads successfully', async ({ page }) => {
  const dash = new DashboardPage(page);
  await expect(dash.WelcomeText).toBeVisible();
});

// ✅ 2
test('TC02 - User name visible', async ({ page }) => {
  const dash = new DashboardPage(page);
  await expect(dash.userHeading).toBeVisible();
});

// ✅ 4
test('TC04 - Completed count visible', async ({ page }) => {
  const dash = new DashboardPage(page);
  await expect(dash.completedCount).toBeVisible();
});

// ✅ 5
test('TC05 - Total spent visible', async ({ page }) => {
  const dash = new DashboardPage(page);
  await expect(dash.totalSpent).toBeVisible();
});

// ✅ 6
test('TC06 - Navigate to Find Doctor', async ({ page }) => {
  const dash = new DashboardPage(page);
  await dash.findDoctorBtn.click();
  await expect(page.getByText('Find the Right Doctor')).toBeVisible();
});

// ✅ 7
test('TC07 - Open Cart page', async ({ page }) => {
  const dash = new DashboardPage(page);
  await dash.openCart();
  await expect(dash.cartHeading).toBeVisible();
});

// ✅ 8
test('TC08 - Empty cart message', async ({ page }) => {
  const dash = new DashboardPage(page);
  await dash.openCart();
  await expect(dash.emptyCartMsg).toBeVisible();
});

// ✅ 9
test('TC09 - Navigate back to Dashboard', async ({ page }) => {
  const dash = new DashboardPage(page);
  await dash.openCart();
  await dash.goToDashboard();
  await expect(dash.WelcomeText).toBeVisible();
});

// ✅ 10
test('TC10 - Click Upcoming tab', async ({ page }) => {
  const dash = new DashboardPage(page);
  await dash.upcomingTab.click();
  await expect(page.getByText('My Appointments')).toBeVisible();
});

// ✅ 11
test('TC11 - Click Past Records tab', async ({ page }) => {
  const dash = new DashboardPage(page);
  await dash.pastTab.click();
});

// ✅ 12
test('TC12 - View appointment details', async ({ page }) => {
  const dash = new DashboardPage(page);
  await dash.upcomingTab.click();
  await dash.viewDetailsBtn.first().click();
});

// ✅ 13
test('TC13 - Booking confirmation visible', async ({ page }) => {
  const dash = new DashboardPage(page);
  await dash.upcomingTab.click();
  await dash.viewDetailsBtn.first().click();
  await expect(page.getByText('Booking Confirmed')).toBeVisible();
});

// ✅ 14
test('TC14 - Navigate to profile page', async ({ page }) => {
  const dash = new DashboardPage(page);
  await dash.openProfile();
  await expect(dash.accountHeading).toBeVisible();
});

// ✅ 15
test('TC15 - Edit full name field', async ({ page }) => {
  const dash = new DashboardPage(page);
  await dash.openProfile();
  await dash.fullName.fill('Raghu Test');
});

// ✅ 16
test('TC16 - Enter DOB', async ({ page }) => {
  const dash = new DashboardPage(page);
  await dash.openProfile();
  await dash.dob.fill('2026-03-29');
});

// ✅ 17
test('TC17 - Enter phone number', async ({ page }) => {
  const dash = new DashboardPage(page);
  await dash.openProfile();
  await dash.phone.fill('9876543210');
});

// ✅ 18
test('TC18 - Save profile changes', async ({ page }) => {
  const dash = new DashboardPage(page);
  await dash.openProfile();
  await dash.saveBtn.click();
});

// ✅ 19
test('TC19 - Logout button visible', async ({ page }) => {
  await expect(page.locator('.lucide-log-out')).toBeVisible();
});

// ✅ 20
test('TC20 - Dashboard reload stability', async ({ page }) => {
  await page.reload();
  await expect(page.getByText('Welcome back')).toBeVisible();
});

// ✅ 21
test('TC21 - Multiple navigation stability', async ({ page }) => {
  const dash = new DashboardPage(page);
  await dash.openCart();
  await dash.goToDashboard();
  await dash.findDoctorBtn.click();
  await dash.goToDashboard();
});


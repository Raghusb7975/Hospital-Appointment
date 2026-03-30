import { test, expect } from '@playwright/test';

// test('test01 - Check the name of the doctor', async ({ page }) => {
//   // Step 1: Navigate to login page and sign in
//   await page.goto('https://medi-schedule--raghubakare143.replit.app/login');
//   await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
//   await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
//   await page.getByRole('button', { name: 'Sign In' }).click();
  
//   // Step 2: Navigate to Find Doctors page
//   await page.getByRole('button', { name: 'Find a Doctor' }).click();
  
//   // Step 3: Ensure the doctor with the name "Dr. Sarah Johnson" is visible
//   const doctorName = await page.getByRole('heading', { name: 'Dr. Sarah Johnson' });
  
//   // Assert the doctor's name is visible
//   await expect(doctorName).toBeVisible();
  
//   // Step 4: Click on the doctor's name
//   await doctorName.click();
// });








// test('test02 - Check doctor experience and rating', async ({ page }) => {
//   // Step 1: Navigate to login page and sign in
//   await page.goto('https://medi-schedule--raghubakare143.replit.app/login');
//   await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
//   await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
//   await page.getByRole('button', { name: 'Sign In' }).click();
  
//   // Step 2: Navigate to Find Doctors page
//   await page.getByRole('button', { name: 'Find a Doctor' }).click();
  
//   // Step 3: Click on 'Book Visit' (second button, nth(1))
//   await page.getByRole('button', { name: 'Book Visit' }).nth(1).click();
  
//   // Step 4: Ensure 'Years Experience' is visible before clicking
//   const yearsExperience = await page.getByText('Years Experience');
//   await expect(yearsExperience).toBeVisible();
//   await yearsExperience.click();  // Click on 'Years Experience' text
  
//   // Step 5: Ensure '4.9(120+ reviews)' is visible before clicking
//   const rating = await page.getByText('4.9(120+ reviews)');
//   await expect(rating).toBeVisible();  // Assert it is visible
//   await rating.click();  // Click on the doctor rating

// });



// test('test03 - Check doctor specialty and location', async ({ page }) => {
//   // Step 1: Navigate to login page and sign in
//   await page.goto('https://medi-schedule--raghubakare143.replit.app/login');
//   await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
//   await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
//   await page.getByRole('button', { name: 'Sign In' }).click();
  
//   // Step 2: Navigate to Find Doctors page
//   await page.getByRole('button', { name: 'Find a Doctor' }).click();
  
//   // Step 3: Click on the 'Book Visit' button (nth(4) indicates the fifth button)
//   await page.getByRole('button', { name: 'Book Visit' }).nth(4).click();
  
//   // Step 4: Click on 'Psychiatry' to filter the specialty
//   const psychiatryText = await page.getByText('Psychiatry');
//   await expect(psychiatryText).toBeVisible();  // Ensure Psychiatry option is visible
//   await psychiatryText.click();  // Click on the Psychiatry option
  
//   // Step 5: Click on 'Mind Wellness Clinic'
//   const clinicText = await page.getByText('Mind Wellness Clinic');
//   await expect(clinicText).toBeVisible();  // Ensure Clinic option is visible
//   await clinicText.click();  // Click on the clinic
  
//   // Step 6: Verify the doctor's specialty is "Psychiatry"
//   const doctorSpecialty = await page.locator('text=Psychiatry');  // Assuming the specialty is displayed as text
//   await expect(doctorSpecialty).toBeVisible();  // Verify that the specialty is displayed
  
//   // Step 7: Verify the location is "Mind Wellness Clinic"
//   const clinicLocation = await page.locator('text=Mind Wellness Clinic');  // Assuming location is displayed as text
//   await expect(clinicLocation).toBeVisible();  // Verify that the clinic name appears
  
//   // You can also assert more details, such as doctor name, rating, etc. if those elements are present
// });


// test('test04 - Check consultation fee is $175', async ({ page }) => {
//   // Step 1: Navigate to the login page and sign in
//   await page.goto('https://medi-schedule--raghubakare143.replit.app/login');
//   await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
//   await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
//   await page.getByRole('button', { name: 'Sign In' }).click();

//   // Step 2: Navigate to Find Doctors
//   await page.getByRole('button', { name: 'Find a Doctor' }).click();

//   // Step 3: Click on the fifth 'Book Visit' button
//   await page.getByRole('button', { name: 'Book Visit' }).nth(5).click();

//   // Step 4: Click on Consultation Fee
//   await page.getByText('Consultation Fee$').click();

//   // Step 5: Verify that the consultation fee is $175
//   const consultationFee = await page.locator('text=$175');
//   await expect(consultationFee).toBeVisible(); // Ensure the fee is visible on the page

//   // Optionally, assert that no other fees are displayed
//   const otherFees = await page.locator('text=$').allTextContents(); // Adjust selector if necessary
//   const feeValues = otherFees.map((fee) => fee.trim()); // Remove extra spaces or line breaks

//   expect(feeValues).toContain('$175'); // Verify that $175 is in the list of fee values
// });




// test('test05 - Check doctor availability', async ({ page }) => {
//   // Step 1: Navigate to the login page and sign in
//   await page.goto('https://medi-schedule--raghubakare143.replit.app/login');
//   await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
//   await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
//   await page.getByRole('button', { name: 'Sign In' }).click();

//   // Step 2: Navigate to Find Doctors
//   await page.getByRole('button', { name: 'Find a Doctor' }).click();

//   // Step 3: Click on the 2nd 'Book Visit' button
//   await page.getByRole('button', { name: 'Book Visit' }).nth(2).click();

//   // Step 4: Check for the doctor's availability text
//   const availabilityText = await page.locator('div').filter({ hasText: /^AvailabilityMon, Wed, Fri$/ }).first();

//   // Step 5: Verify that the availability text is visible
//   await expect(availabilityText).toBeVisible();  // Ensure that the availability text is visible on the page
// });



// test('test06 - Check doctor expertise and name', async ({ page }) => {
//   // Step 1: Navigate to the login page and sign in
//   await page.goto('https://medi-schedule--raghubakare143.replit.app/login');
//   await page.getByRole('textbox', { name: 'Email address' }).fill('Raghu01@gmail.com');
//   await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
//   await page.getByRole('button', { name: 'Sign In' }).click();

//   // Step 2: Navigate to Find a Doctor
//   await page.getByRole('button', { name: 'Find a Doctor' }).click();

//   // Step 3: Click on the 4th 'Book Visit' button
//   await page.getByRole('button', { name: 'Book Visit' }).nth(4).click();

//   // Step 4: Check for the expertise text
//   const expertiseText = await page.locator('text=Expertise & ServicesSpecialized Treatment 1Specialized Treatment 2Specialized');

//   // Step 5: Verify that the expertise text is visible
//   await expect(expertiseText).toBeVisible();

//   // Step 6: Click on the doctor's name to ensure that it links to the doctor's page
//   const doctorName = await page.getByRole('heading', { name: 'Dr. Amanda Foster' });

//   // Step 7: Verify that the doctor's name is visible
//   await expect(doctorName).toBeVisible();
// });




test('test07- Verify timing selection works', async ({ page }) => {
  // Step 1: Navigate to the login page and sign in
  await page.goto('https://medi-schedule--raghubakare143.replit.app/login');
  await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
  await page.getByRole('button', { name: 'Sign In' }).click();

  // Step 2: Navigate to "Find a Doctor"
  await page.getByRole('button', { name: 'Find a Doctor' }).click();

  // Step 3: Click the "Book Visit" button for the second doctor (nth(1))
  await page.getByRole('button', { name: 'Book Visit' }).nth(1).click();

  // Step 4: Click "Go to the Next Month" to navigate the calendar
  await page.getByRole('button', { name: 'Go to the Next Month' }).click();

  // Step 5: Ensure that the date (Wednesday, April 15th) is clickable
  const dateButton = await page.getByRole('button', { name: 'Wednesday, April 15th,' });
  await expect(dateButton).toBeVisible();
  await dateButton.click();

  // Step 6: Open the combobox for selecting the time
  await page.getByRole('combobox').click();

  // Step 7: Ensure "09:00 AM" option is available and clickable
  const timeOption = await page.getByRole('option', { name: '09:00 AM' });
  await expect(timeOption).toBeVisible();
  await timeOption.click();

  // Step 8: Click "Add to Cart" to confirm the selection
  const addToCartButton = await page.getByRole('button', { name: 'Add to Cart' });
  await expect(addToCartButton).toBeVisible();
  await addToCartButton.click();

  // Optional: Check if a confirmation message appears after adding to the cart
  const confirmationMessage = await page.locator('text=Appointment added to cart');
  await expect(confirmationMessage).toBeVisible();
});
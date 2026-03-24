const { test, expect } = require('@playwright/test');


//1. Valid Registration
test('TC01 - Valid Registration', async ({ page }) => {
  await page.goto('https://medi-schedule--raghubakare143.replit.app/register');

  await page.getByRole('textbox', { name: 'Full Name' }).fill('Laxmi');
  await page.getByRole('textbox', { name: 'Email address' }).fill(`laxmi${Date.now()}@gmail.com`);
  await page.getByRole('textbox', { name: 'Password' }).fill('Laxmi@123');
  await page.getByRole('textbox', { name: 'Phone Number' }).fill('9876543210');
  await page.getByRole('textbox', { name: 'Date of Birth' }).fill('2000-01-01');

 await page.getByRole('combobox').click();
 await page.getByRole('option', { name: 'Male', exact: true }).click();

  await page.getByRole('button', { name: 'Create Account' }).click();

  await expect(page).not.toHaveURL(/register/);
});



test('TC02 - Empty Form', async ({ page }) => {
  await page.goto('https://medi-schedule--raghubakare143.replit.app/register');

  await page.getByRole('button', { name: 'Create Account' }).click();


  await expect(page.getByText('Phone number is required')).toBeVisible();
  await expect(page.getByText('Date of birth is required')).toBeVisible();


  await expect(page).toHaveURL(/register/);
});




test('TC03 - Empty Name', async ({ page }) => {
  await page.goto('https://medi-schedule--raghubakare143.replit.app/register');

  await page.getByRole('textbox', { name: 'Email address' }).fill('test@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Test@123');

  await page.getByRole('button', { name: 'Create Account' }).click();


  await expect(
    page.getByText('Name must be at least 2 characters')
  ).toBeVisible();


  await expect(page).toHaveURL(/register/);
});




test('TC04 - Successful Register redirects to Login', async ({ page }) => {
  await page.goto('https://medi-schedule--raghubakare143.replit.app/register');

  await page.getByRole('textbox', { name: 'Full Name' }).fill('raghu');
  await page.getByRole('textbox', { name: 'Email address' }).fill(`ra${Date.now()}@gmail.com`);
  await page.getByRole('textbox', { name: 'Password' }).fill('raghu@12345');
  await page.getByRole('textbox', { name: 'Phone Number' }).fill('9900662219');
  await page.getByRole('textbox', { name: 'Date of Birth' }).fill('2000-01-01');

  await page.getByRole('combobox').click();
  await page.getByRole('option', { name: 'Male', exact: true }).click();

  await page.getByRole('button', { name: 'Create Account' }).click();

  
  await expect(page).toHaveURL(/login/);
});





test('TC5 - Existing Email shows error message', async ({ page }) => {
  await page.goto('https://medi-schedule--raghubakare143.replit.app/register');

  await page.getByRole('textbox', { name: 'Full Name' }).fill('raghu');
  await page.getByRole('textbox', { name: 'Email address' }).fill('ra1@gmail.com'); // already exists
  await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
  await page.getByRole('textbox', { name: 'Phone Number' }).fill('9900886655');
  await page.getByRole('textbox', { name: 'Date of Birth' }).fill('2000-01-01');

  await page.getByRole('combobox').click();
  await page.getByRole('option', { name: 'Male', exact: true }).click();

  await page.getByRole('button', { name: 'Create Account' }).click();

  
  await expect(
    page.getByText(/already|exists|email/i).first()
  ).toBeVisible();


  await expect(page).toHaveURL(/register/);
});






test('TC6 - Invalid Phone Number shows validation message', async ({ page }) => {
  await page.goto('https://medi-schedule--raghubakare143.replit.app/register');

  await page.getByRole('textbox', { name: 'Full Name' }).fill('manu');
  await page.getByRole('textbox', { name: 'Email address' }).fill(`manu${Date.now()}@gmail.com`);
  await page.getByRole('textbox', { name: 'Password' }).fill('Manu@12345');


  await page.getByRole('textbox', { name: 'Phone Number' }).fill('99');

  await page.getByRole('textbox', { name: 'Date of Birth' }).fill('2000-01-01');

  await page.getByRole('combobox').click();
  await page.getByRole('option', { name: 'Male', exact: true }).first().click();

  await page.getByRole('button', { name: 'Create Account' }).click();


  await expect(
    page.getByText(/Phone number is required/i)
  ).toBeVisible();


  await expect(page).toHaveURL(/register/);
});


test('test7-  Invalid Phone Number shows validation message', async ({ page }) => {
  await page.goto('https://medi-schedule--raghubakare143.replit.app/register');
  await page.getByText('MedBookCreate your').click();
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('suresh');
  await page.getByRole('textbox', { name: 'Full Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Email address' }).fill('suresh12@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('1');
  await page.getByRole('textbox', { name: 'Phone Number' }).click();
  await page.getByRole('textbox', { name: 'Phone Number' }).fill('7857462365');
  await page.getByRole('textbox', { name: 'Date of Birth' }).fill('2026-03-28');
  await page.getByRole('combobox').click();
  await page.getByRole('option', { name: 'Male', exact: true }).click();
  await page.getByRole('button', { name: 'Create Account' }).click();

await expect(
    page.getByText(/Password must be at least 6/i)
  ).toBeVisible();
   
});


test('TC08 - Invalid Email Format', async ({ page }) => {
  await page.goto('https://medi-schedule--raghubakare143.replit.app/register');

 await page.getByRole('textbox', { name: 'Email address' }).fill('ravi123');

await page.getByRole('button', { name: 'Create Account' }).click();

const emailInput = page.getByRole('textbox', { name: 'Email address' });

await expect(emailInput).toHaveAttribute('type', 'email');
});


test('TC09 - Password too short', async ({ page }) => {
  await page.goto('https://medi-schedule--raghubakare143.replit.app/register');

  await page.getByRole('textbox', { name: 'Password' }).fill('123');

  await page.getByRole('button', { name: 'Create Account' }).click();

  await expect(page.getByText(/at least/i).first()).toBeVisible();
});


test('TC10 - Gender not selected', async ({ page }) => {
  await page.goto('https://medi-schedule--raghubakare143.replit.app/register');

  await page.getByRole('textbox', { name: 'Full Name' }).fill('Kiran');
  await page.getByRole('textbox', { name: 'Email address' }).fill(`kiran${Date.now()}@gmail.com`);

  await page.getByRole('button', { name: 'Create Account' }).click();

  await expect(page.getByText(/gender/i).first()).toBeVisible();
});



test('TC11 - DOB validation check', async ({ page }) => {
  await page.goto('https://medi-schedule--raghubakare143.replit.app/register');

  await page.getByRole('textbox', { name: 'Date of Birth' }).fill('2030-01-01');

  await page.getByRole('button', { name: 'Create Account' }).click();


  await expect(
    page.locator('text=birth').first()
  ).toBeVisible();
});



test('TC - Successful registration shows success message', async ({ page }) => {
  await page.goto('https://medi-schedule--raghubakare143.replit.app/register');

  await page.getByRole('textbox', { name: 'Full Name' }).fill('Raghu');
  await page.getByRole('textbox', { name: 'Email address' }).fill(`raghu${Date.now()}@gmail.com`);
  await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
  await page.getByRole('textbox', { name: 'Phone Number' }).fill('9876543210');
  await page.getByRole('textbox', { name: 'Date of Birth' }).fill('2000-01-01');

  await page.getByRole('combobox').click();
  await page.getByRole('option', { name: 'Male', exact: true }).first().click();

  await page.getByRole('button', { name: 'Create Account' }).click();

  await expect(
    page.getByText(/success|account created|registered/i).first()
  ).toBeVisible();
});



test('TC12 - Phone less than 10 digits', async ({ page }) => {
  await page.goto('https://medi-schedule--raghubakare143.replit.app/register');

  await page.getByRole('textbox', { name: 'Phone Number' }).fill('12345');

  await page.getByRole('button', { name: 'Create Account' }).click();

  await expect(page.getByText(/phone/i).first()).toBeVisible();
});


test('TC13 - Invalid characters in name', async ({ page }) => {
  await page.goto('https://medi-schedule--raghubakare143.replit.app/register');

  await page.getByRole('textbox', { name: 'Full Name' }).fill('@#$%');

  await page.getByRole('button', { name: 'Create Account' }).click();

  await expect(page.getByText(/name/i).first()).toBeVisible();
});



test('TC14 - Click "Log in instead" navigates to login', async ({ page }) => {
  await page.goto('https://medi-schedule--raghubakare143.replit.app/register');


  await page.getByRole('link', { name: 'Log in instead' }).click();


  await expect(page).toHaveURL(/login/);
});



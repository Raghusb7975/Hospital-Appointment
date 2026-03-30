// class SearchPage {
//   constructor(page) {
//     this.page = page;

//     // 🔐 Login
//     this.email = page.getByRole('textbox', { name: 'Email address' });
//     this.password = page.getByRole('textbox', { name: 'Password' });
//     this.signInBtn = page.getByRole('button', { name: 'Sign In' });

//     // 🔗 Navigation
//     this.findDoctorsLink = page.getByRole('link', { name: 'Find Doctors' });
//     this.findDoctorBtn = page.getByRole('button', { name: 'Find a Doctor' });

//     // 🔍 Search
//     this.searchBox = page.getByRole('textbox', { name: 'Search by name, specialty or' });
//     this.searchBtn = page.getByRole('button', { name: 'Search' });

//     // 🔽 Dropdowns
//     this.specialtyDropdown = page.getByRole('combobox').first();
//     this.sortDropdown = page.getByRole('combobox').nth(1);

//     // 📊 Results
//     this.noDoctorsText = page.locator('text=No doctors found');
//     this.doctorCards = page.locator('h3'); // doctor names
//     this.ratingElements = page.locator('.doctor-rating');
//     this.feeElements = page.locator('.doctor-fee');

//     // 🏷️ Filters
//     this.orthopedicsBtn = page.getByRole('button', { name: 'Orthopedics' });

//     // 📄 Text validations
//     this.showingDoctorsText = page.locator('text=Showing 10 doctors');
//   }

//   // ================= ACTION METHODS =================

//   async gotoLogin() {
//     await this.page.goto('https://medi-schedule--raghubakare143.replit.app/login');
//   }

//   async login(email, password) {
//     await this.email.fill(email);
//     await this.password.fill(password);
//     await this.signInBtn.click();
//   }

//   async goToFindDoctors() {
//     await this.findDoctorsLink.click();
//   }

//   async goToFindDoctorBtn() {
//     await this.findDoctorBtn.click();
//   }

//   async searchDoctor(text) {
//     await this.searchBox.fill(text);
//   }

//   async clickSearch() {
//     await this.searchBtn.click();
//   }

//   async clearSearch() {
//     await this.searchBox.fill('');
//   }

//   async selectSort(value) {
//     await this.sortDropdown.waitFor({ state: 'visible' });
//     await this.sortDropdown.selectOption({ value });
//   }

//   async selectSpecialty(label) {
//     await this.specialtyDropdown.waitFor({ state: 'visible' });
//     await this.specialtyDropdown.selectOption({ label });
//   }

//   async clickOrthopedics() {
//     await this.orthopedicsBtn.click();
//   }

//   // ================= GET DATA METHODS =================

//   async getRatings() {
//     const ratings = await this.ratingElements.allTextContents();
//     return ratings.map(r => parseFloat(r));
//   }

//   async getFees() {
//     const fees = await this.feeElements.allTextContents();
//     return fees.map(f => parseFloat(f.replace('$', '').trim()));
//   }

//   async getDoctorNames() {
//     return await this.doctorCards.allTextContents();
//   }

//   // ================= VALIDATION HELPERS =================

//   async isNoDoctorsVisible() {
//     return await this.noDoctorsText.isVisible();
//   }

//   async isDoctorVisible(name) {
//     return await this.page.locator(`h3:has-text("${name}")`).isVisible();
//   }

//   async isSpecialtyVisible(text) {
//     return await this.page.locator(`text=${text}`).first().isVisible();
//   }

//   async isShowingDoctorsVisible() {
//     return await this.showingDoctorsText.isVisible();
//   }
// }

// module.exports = { SearchPage };
// POM/searchPage.js

// export default class SearchPage {
//   constructor(page) {
//     this.page = page;

//     // 🔐 Login
//     this.emailInput = page.getByRole('textbox', { name: 'Email address' });
//     this.passwordInput = page.getByRole('textbox', { name: 'Password' });
//     this.signInBtn = page.getByRole('button', { name: 'Sign In' });

//     // 🔗 Navigation
//     this.findDoctorsLink = page.getByRole('link', { name: 'Find Doctors' });
//     this.findDoctorBtn = page.getByRole('button', { name: 'Find a Doctor' });

//     // 🔍 Search
//     this.searchBox = page.getByRole('textbox', { name: 'Search by name, specialty or' });
//     this.searchBtn = page.getByRole('button', { name: 'Search' });

//     // 📊 Texts
//     this.showingDoctorsText = page.locator('text=Showing 10 doctors');
//     this.noDoctorsText = page.locator('text=No doctors found');

//     // 🧑‍⚕️ Doctors
//     this.doctorName = (name) => page.locator('h3', { hasText: name });
//     this.doctorText = (name) => page.locator(`text=${name}`);

//     // 🏷 Specialties
//     this.specialtyText = (name) => page.locator('span').filter({ hasText: name });

//     // 🔽 Dropdowns
//     this.specializationDropdown = page.getByRole('combobox').first();
//     this.sortDropdown = page.getByRole('combobox').nth(1);

//     // 💰 Fees & Ratings
//     this.doctorFees = page.locator('.doctor-fee');
//     this.doctorRatings = page.locator('.doctor-rating');
//   }

//   // 🌐 Navigation
//   async gotoLogin() {
//     await this.page.goto('https://medi-schedule--raghubakare143.replit.app/login');
//   }

//   async gotoFindDoctors() {
//     await this.findDoctorsLink.click();
//   }

//   async gotoFindDoctorBtn() {
//     await this.findDoctorBtn.click();
//   }

//   // 🔐 Login
//   async login(email, password) {
//     await this.emailInput.fill(email);
//     await this.passwordInput.fill(password);
//     await this.signInBtn.click();
//   }

//   // 🔍 Search
//   async searchDoctor(text) {
//     await this.searchBox.fill(text);
//     await this.searchBtn.click();
//   }

//   async clearSearch() {
//     await this.searchBox.fill('');
//   }

//   // 🏷 Filter
//   async selectSpecialization(label) {
//     await this.specializationDropdown.selectOption({ label });
//   }

//   async clickSpecialtyButton(name) {
//     await this.page.getByRole('button', { name }).click();
//   }

//   // 🔽 Sorting
//   async sortBy(value) {
//     await this.sortDropdown.selectOption({ value });
//   }

//   // 📊 Get Data
//   async getAllFees() {
//     const fees = await this.doctorFees.allTextContents();
//     return fees.map(f => parseFloat(f.replace('$', '').trim()));
//   }

//   async getAllRatings() {
//     const ratings = await this.doctorRatings.allTextContents();
//     return ratings.map(r => parseFloat(r));
//   }

//   // ✅ Validations
//   async isDoctorVisible(name) {
//     return await this.doctorName(name).isVisible();
//   }

//   async isNoDoctorVisible() {
//     return await this.noDoctorsText.isVisible();
//   }

//   async isShowingDoctorsVisible() {
//     return await this.showingDoctorsText.isVisible();
//   }
// }



// POM/searchPage.js
export default class SearchPage {
  constructor(page) {
    this.page = page;

    // 🔐 Login
    this.emailInput = page.getByRole('textbox', { name: 'Email address' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.signInBtn = page.getByRole('button', { name: 'Sign In' });

    // 🔎 Navigation
    this.findDoctorsLink = page.getByRole('link', { name: 'Find Doctors' });
    this.findDoctorBtn = page.getByRole('button', { name: 'Find a Doctor' });

    // 🔍 Search
    this.searchBox = page.getByRole('textbox', { name: 'Search by name, specialty or' });
    this.searchBtn = page.getByRole('button', { name: 'Search' });

    // 📊 Dropdowns
    this.sortDropdown = page.getByRole('combobox').nth(1);
    this.filterDropdown = page.getByRole('combobox').first();

    // 🧾 Common Locators
    this.doctorCards = page.locator('.doctor-card');
    this.doctorRating = page.locator('.doctor-rating');
    this.doctorFee = page.locator('.doctor-fee');
  }

  async gotoLogin() {
    await this.page.goto('https://medi-schedule--raghubakare143.replit.app/login');
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.signInBtn.click();
  }

  async goToFindDoctors() {
    await this.findDoctorsLink.click();
  }

  async goToFindDoctorBtn() {
    await this.findDoctorBtn.click();
  }

  async searchDoctor(name) {
    await this.searchBox.fill(name);
    await this.searchBtn.click();
  }

  async getDoctorByName(name) {
    return this.page.locator('h3', { hasText: name });
  }

  async getText(text) {
    return this.page.locator(`text=${text}`);
  }

  async selectSort(value) {
    await this.sortDropdown.waitFor({ state: 'visible' });
    await this.sortDropdown.selectOption({ value });
  }

  async selectFilter(label) {
    await this.filterDropdown.waitFor({ state: 'visible' });
    await this.filterDropdown.selectOption({ label });
  }

  async getRatings() {
    const ratings = await this.doctorRating.allTextContents();
    return ratings.map(r => parseFloat(r));
  }

  async getFees() {
    const fees = await this.doctorFee.allTextContents();
    return fees.map(f => parseFloat(f.replace('$', '').trim()));
  }
}
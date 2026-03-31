// class CartPage {
//   constructor(page) {
//     this.page = page;
//     this.emailField = page.locator('input[name="Email address"]');
//     this.passwordField = page.locator('input[name="Password"]');
//     this.signInButton = page.locator('button[type="submit"]');
//     this.cartContainer = page.locator('.cart-container');
//   }

//   // Login to the application
//   async login(email, password) {
//     // Wait for email field to be visible
//     await this.emailField.waitFor({ state: 'visible', timeout: 60000 });
//     await this.emailField.fill(email);
    
//     // Wait for password field to be visible
//     await this.passwordField.waitFor({ state: 'visible', timeout: 60000 });
//     await this.passwordField.fill(password);
    
//     // Wait for the sign-in button to be clickable and click it
//     await this.signInButton.waitFor({ state: 'visible', timeout: 60000 });
//     await this.signInButton.click();
    
//     // Optional: Wait for the next page (dashboard or cart) to load
//     await this.page.waitForURL('https://yourappurl.com/cart', { timeout: 60000 });
//   }

//   // Navigate to Cart Page
//   async navigateToCart() {
//     await this.page.goto('https://yourappurl.com/cart');
//     await this.cartContainer.waitFor({ state: 'attached', timeout: 60000 }); // Wait for cart page elements to load
//   }

//   // Verify Cart Item Count
//   async verifyCartItemCount() {
//     const itemsInCart = await this.page.locator('.cart-item');
//     return itemsInCart.count();
//   }

//   // Get Cart Item Title
//   async getCartItemTitle(index) {
//     const itemTitle = await this.page.locator(`.cart-item:nth-child(${index}) .title`);
//     return itemTitle.innerText();
//   }

//   // Get Subtotal
//   async getSubtotal() {
//     const subtotal = await this.page.locator('.subtotal');
//     return subtotal.innerText();
//   }

//   // Get Platform Fee
//   async getPlatformFee() {
//     const platformFee = await this.page.locator('.platform-fee');
//     return platformFee.innerText();
//   }

//   // Get Total Due
//   async getTotalDue() {
//     const totalDue = await this.page.locator('.total-due');
//     return totalDue.innerText();
//   }
// }

// export default CartPage;
// class CartPage {
//   constructor(page) {
//     this.page = page;
//     // Locators for Cart Page
//     this.cartHeader = page.locator('h1'); // Adjust if needed
//     this.checkoutButton = page.locator('button.checkout'); // Adjust if needed
//     this.cartItemCount = page.locator('.cart-item-count'); // Adjust if needed
//     this.cartItems = page.locator('.cart-item'); // Adjust if needed
//   }

//   // Method to navigate to the Cart Page
//   async navigateToCart() {
//     await this.page.goto('/cart');
//     await this.page.waitForSelector(this.cartHeader);
//     await expect(this.cartHeader).toBeVisible();
//   }

//   // Method to check if the checkout button is visible
//   async isCheckoutButtonVisible() {
//     await expect(this.checkoutButton).toBeVisible();
//   }

//   // Method to check if the cart is not empty
//   async isCartNotEmpty() {
//     await expect(this.cartItemCount).toHaveText(/greater than 0/); // You can modify this check based on how cart items are counted
//   }

//   // Method to check cart items
//   async getCartItems() {
//     return await this.cartItems.count(); // Returns the number of items in the cart
//   }

//   // Additional methods for other interactions (removal, subtotal, etc.) can be added here
// }

// module.exports = { CartPage };
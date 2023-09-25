// Get the checkout button element
const checkoutButton = document.querySelector('.add-to-cart');

// Add event listener to the checkout button
checkoutButton.addEventListener('click', addToCart);

// Function to add item to cart
function addToCart() {
  try {
    // Get the selected item details
    const item = this.parentNode;
    const itemName = item.querySelector('h2').textContent;
    const itemPrice = item.querySelector('.price').textContent;

    // Create a new cart item element
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <p>${itemName}</p>
      <p>${itemPrice}</p>
    `;

    // Append the cart item to the cart container
    const cartContainer = document.querySelector('.cart-container');
    cartContainer.appendChild(cartItem);

    // Calculate the total order amount
    calculateTotal();
  } catch (error) {
    console.error('Error adding item to cart:', error);
  }
}

// Function to calculate the total order amount
function calculateTotal() {
  try {
    // Get all the cart item elements
    const cartItems = document.querySelectorAll('.cart-item');

    // Initialize the total amount
    let totalAmount = 0;

    // Iterate over the cart items and sum up their prices
    cartItems.forEach((item) => {
      const itemPrice = parseFloat(item.querySelector('p:last-child').textContent);
      totalAmount += itemPrice;
    });

    // Display the total amount
    const totalElement = document.querySelector('.total-amount');
    totalElement.textContent = `Total: ₱${totalAmount.toFixed(2)}`;
  } catch (error) {
    console.error('Error calculating total amount:', error);
  }
}

// Get the checkout form element
const checkoutForm = document.querySelector('.checkout-form');

// Add event listener to the checkout button
checkoutButton.addEventListener('click', toggleCheckoutForm);

// Function to toggle the visibility of the checkout form
function toggleCheckoutForm() {
  try {
    checkoutForm.classList.toggle('hidden');
  } catch (error) {
    console.error('Error toggling checkout form visibility:', error);
  }
}

// Function to handle the "Add to Cart" button click
function addToCart(item) {
  try {
    // Get the price of the item
    const price = parseFloat(item.querySelector('.price').textContent.replace('₱', ''));

    // Add the price to the cart
    cart.push(price);

    // Update the total pricing
    updateTotal();
  } catch (error) {
    console.error('Error adding item to cart:', error);
  }
}

// Function to update the total pricing
function updateTotal() {
  try {
    // Get the total pricing element
    const totalElement = document.querySelector('#total');

    // Calculate the total pricing
    const total = cart.reduce((acc, curr) => acc + curr, 0);

    // Update the total pricing element
    totalElement.textContent = `Total: ₱${total.toFixed(2)}`;
  } catch (error) {
    console.error('Error updating total pricing:', error);
  }
}

// Array to store the prices of the items in the cart
const cart = [];

// Get all the "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Add event listener to each "Add to Cart" button
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    addToCart(button.parentNode);
  });
});


try {
  // Code to generate the grid layout
} catch (error) {
  console.error('An error occurred:', error);
  // Handle the error gracefully (e.g., display an error message)
}

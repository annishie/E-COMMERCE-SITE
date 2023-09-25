// HTML code for the homepage
const homepage = `
  <div class="banner">
    <img src="coffee_shop_banner.jpg" alt="Coffee Shop Banner">
  </div>
  <div class="welcome-message">
    <h1>Welcome to Moon La Cafe</h1>
    <p>Indulge in our delicious bread, coffee, and shakes</p>
    <a href="/menu" class="order-now-button">Order Now</a>
  </div>
  <div class="featured-products">
    <h2>Featured Products</h2>
    <div class="product">
      <img src="bread.jpg" alt="Freshly Baked Bread">
      <h3>Freshly Baked Bread</h3>
      <p>Delicious bread made with love</p>
    </div>
    <div class="product">
      <img src="coffee.jpg" alt="Coffee">
      <h3>Coffee</h3>
      <p>Rich and aromatic coffee to start your day</p>
    </div>
    <div class="product">
      <img src="shakes.jpg" alt="Shakes">
      <h3>Shakes</h3>
      <p>Creamy and refreshing shakes for a treat</p>
    </div>
  </div>
`;

// Render the homepage
document.getElementById('content').innerHTML = homepage;

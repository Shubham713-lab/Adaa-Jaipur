import React from 'react';

const Products = () => {
  return (
    <div className="container">
      <h1>Our Products</h1>
      <div className="products-grid">
        {/* Placeholder for product listing */}
        <div className="product-card">
          <div className="product-image">
            <img src="https://via.placeholder.com/300" alt="Product" />
          </div>
          <h3>Product Name</h3>
          <p>₹2499</p>
        </div>
      </div>
    </div>
  );
};

export default Products; 
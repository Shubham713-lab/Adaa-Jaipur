import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>Adaa Jaipur - Your one-stop shop for traditional wear</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>Home</li>
              <li>Products</li>
              <li>Contact</li>
              <li>About</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Info</h3>
            <p>Email: contact@adaajaipur.com</p>
            <p>Phone: +91 1234567890</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
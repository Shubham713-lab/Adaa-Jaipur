import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineShareAlt, 
         AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { BiRuler } from 'react-icons/bi';
import { TbTruckDelivery } from 'react-icons/tb';

const ProductPage = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('');
  const [mainImage, setMainImage] = useState(0);
  
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  const images = [
    "https://via.placeholder.com/600x800",
    "https://via.placeholder.com/600x800",
    "https://via.placeholder.com/600x800",
    "https://via.placeholder.com/600x800"
  ];

  return (
    <div className="product-page">
      <div className="container">
        <div className="product-details">
          <div className="product-images">
            <div className="image-thumbnails">
              {images.map((img, index) => (
                <div 
                  key={index} 
                  className={`thumbnail ${mainImage === index ? 'active' : ''}`}
                  onClick={() => setMainImage(index)}
                >
                  <img src={img} alt={`View ${index + 1}`} />
                </div>
              ))}
            </div>
            <div className="main-image">
              <img src={images[mainImage]} alt="Product" />
              <button className="share-button">
                <AiOutlineShareAlt />
              </button>
            </div>
          </div>

          <div className="product-info">
            <div className="product-header">
              <div>
                <p className="brand">ADAA JAIPUR</p>
                <h1>Floral Print Anarkali</h1>
                <p className="category">Suits</p>
              </div>
              <button className="wishlist-btn">
                <AiOutlineHeart />
              </button>
            </div>

            <div className="rating-section">
              <div className="stars">
                {[...Array(5)].map((_, index) => (
                  index < 4 ? <AiFillStar key={index} /> : <AiOutlineStar key={index} />
                ))}
              </div>
              <span className="rating">4.0</span>
              <span className="reviews">(128 reviews)</span>
            </div>

            <div className="price-section">
              <div className="price-details">
                <p className="price">₹2,499</p>
                <p className="original-price">₹3,999</p>
                <span className="discount">38% OFF</span>
              </div>
              <p className="tax-info">Inclusive of all taxes</p>
            </div>
            
            <div className="size-selection">
              <div className="size-header">
                <h3>Select Size</h3>
                <button className="size-guide">
                  <BiRuler /> Size Guide
                </button>
              </div>
              <div className="size-options">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="delivery-section">
              <TbTruckDelivery className="delivery-icon" />
              <div>
                <p className="delivery-title">Free Delivery</p>
                <p className="delivery-info">Estimated delivery by 25th March</p>
              </div>
            </div>

            <div className="product-actions">
              <button className="add-to-cart">
                <AiOutlineShoppingCart /> Add to Cart
              </button>
              <button className="buy-now">
                Buy Now
              </button>
            </div>

            <div className="product-description">
              <h3>Product Details</h3>
              <div className="description-content">
                <p>• Premium quality cotton blend fabric</p>
                <p>• Traditional floral print design</p>
                <p>• Full-length Anarkali style</p>
                <p>• Comes with matching dupatta</p>
                <p>• Hand wash recommended</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage; 
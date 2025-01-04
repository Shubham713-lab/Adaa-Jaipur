import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Link } from 'react-router-dom';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1585914641050-fa9883c4e21c",
      title: "Traditional Elegance",
      subtitle: "Discover our exclusive collection of ethnic wear",
      cta: "Shop Now",
      position: "left",
      textColor: "light"
    },
    {
      image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b",
      title: "Wedding Collection",
      subtitle: "Make your special day even more beautiful",
      cta: "Explore",
      position: "right",
      textColor: "light"
    },
    {
      image: "https://your-third-image-url.jpg",
      title: "Festival Season",
      subtitle: "Celebrate in style with our festive collection",
      cta: "View Collection",
      position: "center",
      textColor: "dark"
    },
    {
      image: "https://your-fourth-image-url.jpg",
      title: "Designer Wear",
      subtitle: "Exclusive designer pieces for every occasion",
      cta: "Shop Designer",
      position: "bottom-left",
      textColor: "light"
    },
    {
      image: "https://your-fifth-image-url.jpg",
      title: "New Arrivals",
      subtitle: "Check out our latest collection",
      cta: "Shop New",
      position: "bottom-right",
      textColor: "light"
    }
  ];

  const products = [
    {
      id: 1,
      name: "Floral Print Anarkali",
      price: "₹2,499",
      image: "https://via.placeholder.com/300x400",
      category: "Suits"
    },
    // Add more products...
  ];

  const navigate = useNavigate();

  return (
    <div className="home-page">
      <section className="hero-section">
        <Swiper
          modules={[Autoplay, Navigation, Pagination, EffectFade]}
          effect="fade"
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="hero-slider"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="hero-slide">
                <div className="hero-image">
                  <img src={slide.image} alt={slide.title} />
                </div>
                <div className={`hero-content ${slide.position} ${slide.textColor}`}>
                  <h1>{slide.title}</h1>
                  <p>{slide.subtitle}</p>
                  <button className="cta-button">{slide.cta}</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Offer Banners Section */}
      <section className="offer-banners">
        <div className="container">
          <div className="banner-grid">
            {/* Large Banner */}
            <div className="banner-item large">
              <div className="banner-content">
                <span className="banner-label">Special Offer</span>
                <h2>Get 30% OFF</h2>
                <p>On your first purchase</p>
                <div className="coupon-code">
                  <span>Use Code:</span>
                  <strong>FIRST30</strong>
                </div>
                <button className="banner-cta">Shop Now</button>
              </div>
              <img src="https://via.placeholder.com/800x400" alt="Special Offer" />
            </div>

            {/* Small Banners */}
            <div className="banner-item small">
              <div className="banner-content">
                <span className="banner-label">Limited Time</span>
                <h3>Festival Sale</h3>
                <p>Up to 50% Off</p>
                <button className="banner-cta">Explore</button>
              </div>
              <img src="https://via.placeholder.com/400x300" alt="Festival Sale" />
            </div>

            <div className="banner-item small">
              <div className="banner-content">
                <span className="banner-label">New Season</span>
                <h3>Summer Collection</h3>
                <div className="coupon-code">
                  <span>Code:</span>
                  <strong>SUMMER25</strong>
                </div>
                <button className="banner-cta">View All</button>
              </div>
              <img src="https://via.placeholder.com/400x300" alt="Summer Collection" />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Showcase */}
      <section className="categories-showcase">
        <div className="container">
          <h2>Shop By Category</h2>
          <div className="category-grid">
            <div className="category-card">
              <img src="https://via.placeholder.com/300x400" alt="Sarees" />
              <h3>Sarees</h3>
              <Link to="/category/sarees" className="category-link">Shop Now</Link>
            </div>
            <div className="category-card">
              <img src="https://via.placeholder.com/300x400" alt="Lehengas" />
              <h3>Lehengas</h3>
              <Link to="/category/lehengas" className="category-link">Shop Now</Link>
            </div>
            <div className="category-card">
              <img src="https://via.placeholder.com/300x400" alt="Suits" />
              <h3>Suits</h3>
              <Link to="/category/suits" className="category-link">Shop Now</Link>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="new-arrivals">
        <div className="container">
          <h2>New Arrivals</h2>
          <div className="product-grid">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="product-card">
                <div className="product-image">
                  <img src={`https://via.placeholder.com/300x400`} alt="Product" />
                  <div className="product-overlay">
                    <button className="quick-view">Quick View</button>
                  </div>
                </div>
                <div className="product-info">
                  <h3>Designer Piece</h3>
                  <p className="price">₹1,999</p>
                  <button className="add-to-cart">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="featured-collection">
        <div className="container">
          <div className="collection-banner">
            <div className="collection-content">
              <h2>Wedding Collection</h2>
              <p>Discover our exclusive wedding collection</p>
              <Link to="/collection/wedding" className="collection-button">Explore Now</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🚚</div>
              <h3>Free Shipping</h3>
              <p>On orders above ₹999</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">↩️</div>
              <h3>Easy Returns</h3>
              <p>7-day return policy</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🛡️</div>
              <h3>Secure Payment</h3>
              <p>100% secure checkout</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💎</div>
              <h3>Premium Quality</h3>
              <p>Handpicked products</p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="instagram-section">
        <div className="container">
          <h2>Follow Us on Instagram</h2>
          <div className="instagram-grid">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="instagram-item">
                <img src={`https://via.placeholder.com/300x300`} alt="Instagram" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <div className="container">
          <h2 className="section-title">New Arrivals</h2>
          <div className="product-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  <div className="quick-actions">
                    <button className="action-btn wishlist" title="Add to Wishlist">
                      <AiOutlineHeart />
                    </button>
                    <button className="action-btn cart" title="Add to Cart">
                      <AiOutlineShoppingCart />
                    </button>
                  </div>
                  <div className="product-tag">New</div>
                </div>
                <div className="product-info" onClick={() => navigate(`/product/${product.id}`)}>
                  <h3>{product.name}</h3>
                  <p className="category">{product.category}</p>
                  <div className="price-row">
                    <p className="price">{product.price}</p>
                    <button className="buy-now">Buy Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 
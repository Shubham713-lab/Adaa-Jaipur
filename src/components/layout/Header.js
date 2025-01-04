import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineUser, AiOutlineSearch } from 'react-icons/ai';
import { BiHomeAlt } from 'react-icons/bi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const categories = {
    "Traditional Wear": [
      "Sarees",
      "Lehengas",
      "Salwar Suits",
      "Kurtis",
    ],
    "Western Wear": [
      "Dresses",
      "Tops",
      "Indo-Western",
      "Gowns",
    ],
    "Collections": [
      "Wedding Collection",
      "Party Wear",
      "Office Wear",
      "Festival Collection",
    ]
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <div className="logo">
            <Link to="/" className="logo-link">
              <span className="logo-text">ADAA</span>
              <span className="logo-subtext">JAIPUR</span>
            </Link>
          </div>
          
          <div className="search-bar">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit">
                <AiOutlineSearch />
              </button>
            </form>
          </div>

          <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <ul className="nav-list">
              {!isHomePage && (
                <li>
                  <Link to="/" className="nav-link">
                    <BiHomeAlt className="nav-icon" />
                    <span>Home</span>
                  </Link>
                </li>
              )}
              <li className="has-dropdown">
                <Link to="/categories" className="nav-link">Categories</Link>
                <div className="mega-menu">
                  <div className="mega-menu-content">
                    {Object.entries(categories).map(([category, items]) => (
                      <div key={category} className="mega-menu-column">
                        <h3>{category}</h3>
                        <ul>
                          {items.map((item) => (
                            <li key={item}>
                              <Link to={`/category/${item.toLowerCase().replace(' ', '-')}`}>
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </li>
              <li>
                <Link to="/wishlist" className="nav-link">
                  <AiOutlineHeart className="nav-icon" />
                  <span>Wishlist</span>
                </Link>
              </li>
              <li>
                <Link to="/cart" className="nav-link cart-link">
                  <AiOutlineShoppingCart className="nav-icon" />
                  <span>Cart</span>
                  <span className="cart-count">0</span>
                </Link>
              </li>
              <li>
                <Link to="/login" className="nav-link">
                  <AiOutlineUser className="nav-icon" />
                  <span>Login</span>
                </Link>
              </li>
            </ul>
          </nav>

          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 
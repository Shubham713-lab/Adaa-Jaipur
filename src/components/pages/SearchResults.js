import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { BsFilter } from 'react-icons/bs';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    category: [],
    priceRange: '',
    color: [],
    size: [],
    sortBy: 'relevance'
  });

  const priceRanges = [
    { label: 'Under ₹500', value: '0-500' },
    { label: '₹500 - ₹1000', value: '500-1000' },
    { label: '₹1000 - ₹2000', value: '1000-2000' },
    { label: 'Above ₹2000', value: '2000-above' }
  ];

  const categories = [
    'Sarees', 'Lehengas', 'Suits', 'Kurtis', 'Dresses'
  ];

  const colors = [
    'Red', 'Blue', 'Green', 'Yellow', 'Pink', 'Black'
  ];

  const sizes = [
    'XS', 'S', 'M', 'L', 'XL', 'XXL'
  ];

  const handleFilterChange = (type, value) => {
    setFilters(prev => {
      if (Array.isArray(prev[type])) {
        return {
          ...prev,
          [type]: prev[type].includes(value)
            ? prev[type].filter(item => item !== value)
            : [...prev[type], value]
        };
      }
      return { ...prev, [type]: value };
    });
  };

  return (
    <div className="search-page">
      <div className="container">
        <div className="search-header">
          <h1>Search Results for "{query}"</h1>
          <button 
            className="filter-toggle"
            onClick={() => setShowFilters(!showFilters)}
          >
            <BsFilter /> Filters
          </button>
        </div>

        <div className="search-content">
          <aside className={`filters ${showFilters ? 'show' : ''}`}>
            <div className="filter-section">
              <h3>Sort By</h3>
              <select 
                value={filters.sortBy}
                onChange={(e) => handleFilterChange('sortBy', e.target.value)}
              >
                <option value="relevance">Relevance</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
                <option value="newest">Newest First</option>
              </select>
            </div>

            <div className="filter-section">
              <h3>Price Range</h3>
              {priceRanges.map(range => (
                <label key={range.value} className="filter-option">
                  <input
                    type="radio"
                    name="priceRange"
                    value={range.value}
                    checked={filters.priceRange === range.value}
                    onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                  />
                  {range.label}
                </label>
              ))}
            </div>

            <div className="filter-section">
              <h3>Category</h3>
              {categories.map(category => (
                <label key={category} className="filter-option">
                  <input
                    type="checkbox"
                    checked={filters.category.includes(category)}
                    onChange={() => handleFilterChange('category', category)}
                  />
                  {category}
                </label>
              ))}
            </div>

            <div className="filter-section">
              <h3>Color</h3>
              <div className="color-options">
                {colors.map(color => (
                  <div
                    key={color}
                    className={`color-circle ${filters.color.includes(color) ? 'selected' : ''}`}
                    style={{ backgroundColor: color.toLowerCase() }}
                    onClick={() => handleFilterChange('color', color)}
                  />
                ))}
              </div>
            </div>

            <div className="filter-section">
              <h3>Size</h3>
              <div className="size-options">
                {sizes.map(size => (
                  <div
                    key={size}
                    className={`size-box ${filters.size.includes(size) ? 'selected' : ''}`}
                    onClick={() => handleFilterChange('size', size)}
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <div className="search-results">
            {/* Placeholder for search results */}
            <div className="product-grid">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="product-card">
                  <div className="product-image">
                    <img src={`https://via.placeholder.com/300x400`} alt="Product" />
                  </div>
                  <div className="product-info">
                    <h3>Product Name</h3>
                    <p className="price">₹1,999</p>
                    <button className="add-to-cart">Add to Cart</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults; 
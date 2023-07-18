import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import './Products.css';
import Footer from '../components/Footer';

const Products = () => {
  // State variables
  const [products, setProducts] = useState([]); // Stores all products
  const [filteredProducts, setFilteredProducts] = useState([]); // Stores filtered products
  const [filterOptions, setFilterOptions] = useState({ // Stores filter options
    equipment: false, // Whether to filter by equipment category
    combo: false, // Whether to filter by combo category
    accessories: false, // Whether to filter by accessories category
    priceMin: '', // Minimum price value
    priceMax: '' // Maximum price value
  });

  useEffect(() => {
    // Fetch products from the server
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:7000/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Apply filters to the products whenever filter options change
    const applyFilters = () => {
      let filtered = products;

      // Get the selected filters
      const selectedFilters = Object.entries(filterOptions)
        .filter(([key, value]) => value && key !== 'priceMin' && key !== 'priceMax')
        .map(([key]) => key);

      // Apply category filters
      if (selectedFilters.length > 0) {
        filtered = filtered.filter(product =>
          selectedFilters.includes(product.category)
        );
      }

      // Apply price range filter
      const { priceMin, priceMax } = filterOptions;
      if (priceMin !== '' && priceMax !== '') {
        filtered = filtered.filter(product =>
          product.price >= parseFloat(priceMin) && product.price <= parseFloat(priceMax)
        );
      }

      setFilteredProducts(filtered);
    };

    applyFilters();
  }, [filterOptions, products]);

  const handleFilterChange = event => {
    // Update filter options based on the input change
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFilterOptions(prevOptions => ({
      ...prevOptions,
      [name]: newValue
    }));
  };

  return (
    <div className='productsbody'>
      <Navbar />
      <h2 className="filter-h2">Products</h2>
      <p> Explore our wide range of premium pickleball products at Dre's Pickleball Paradise. We are passionate about providing pickleball enthusiasts with top-quality gear, equipment, apparel, and accessories. Whether you're a beginner or an experienced player, our carefully curated collection caters to all skill levels and preferences. Discover high-performance paddles, reliable balls, stylish apparel, must-have accessories, and more. Each product is handpicked from trusted brands to ensure the best experience on the pickleball court. Elevate your game and gear up with Dre's Pickleball Paradise today!</p>
      <div className="filterSection">
        <h2 className="filter-h2">Filter Products</h2>

        <div className="filter-checkboxes">
          <div>
            <label className="filter-label">
              <input
                type="checkbox"
                name="equipment"
                checked={filterOptions.equipment}
                onChange={handleFilterChange}
                className="filterInput-check"
              />
              Equipment
            </label>
          </div>

          <div>
            <label className="filter-label">
              <input
                type="checkbox"
                name="combo"
                checked={filterOptions.combo}
                onChange={handleFilterChange}
                className="filterInput-check"
              />
              Combos
            </label>
          </div>

          <div>
            <label className="filter-label">
              <input
                type="checkbox"
                name="accessories"
                checked={filterOptions.accessories}
                onChange={handleFilterChange}
                className="filterInput-check"
              />
              Accessories
            </label>
          </div>
        </div>

        <div className="price-filter">
          <div>
            <label className="filter-label">
              Price Min:
              <input
                type="number"
                name="priceMin"
                value={filterOptions.priceMin}
                onChange={handleFilterChange}
                className="filterPrice"
              />
            </label>
          </div>
          <div>
            <label className="filter-label">
              Price Max:
              <input
                type="number"
                name="priceMax"
                value={filterOptions.priceMax}
                onChange={handleFilterChange}
                className="filterPrice"
              />
            </label>
          </div>
        </div>
      </div>

      <div className="card-container">
        {filteredProducts.map(product => (
          <div className="card" key={product.id}>
            <img src={product.image} className="product-img" alt={product.description} />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <h2 className="product-price">${product.price}</h2>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Products;

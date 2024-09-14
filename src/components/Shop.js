import React, { useState, useEffect } from 'react';
import './Shop.css';
import { getAllProducts } from '../services/ProductService';
import ShopForm from './ShopForm';

const Shop = ({ isDarkMode }) => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const fetchedProducts = await getAllProducts();
    setProducts(fetchedProducts);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  const filteredProducts = sortedProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`shop ${isDarkMode ? 'shop-dark' : ''}`}>
      <div className="banner">
        <h1>Featured Products</h1>
        <div className="featured-products">
          {products.slice(0, 5).map(product => (
            <div key={product.id} className="featured-product-card">
              <a href={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} />
              </a>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>${product.price.toFixed(2)}</p>
              <button>See Product</button>
            </div>
          ))}
        </div>
      </div>
      <div className="shop-controls">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <select value={sortOrder} onChange={handleSortChange}>
          <option value="asc">Sort by price: Low to High</option>
          <option value="desc">Sort by price: High to Low</option>
        </select>
      </div>
      <div className="product-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <a href={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} />
            </a>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price.toFixed(2)}</p>
            <button>See Product</button>
          </div>
        ))}
      </div>
      <ShopForm />
    </div>
  );
};

export default Shop;

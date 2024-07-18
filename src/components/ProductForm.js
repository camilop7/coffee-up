// src/components/ProductForm.js
import React, { useState, useEffect } from 'react';
import { addProduct, updateProduct, getProduct, deleteProduct } from '../services/productService';

const ProductForm = ({ productId }) => {
  const [product, setProduct] = useState({ type: '', name: '', price: '', photos: [], reviews: [] });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (productId) {
      await updateProduct(productId, product);
    } else {
      await addProduct(product);
    }
  };

  const handleDelete = async () => {
    if (productId) {
      await deleteProduct(productId);
    }
  };

  const fetchProduct = async () => {
    if (productId) {
      const fetchedProduct = await getProduct(productId);
      setProduct(fetchedProduct);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [productId]);

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="type" value={product.type} onChange={handleChange} placeholder="Type" />
      <input type="text" name="name" value={product.name} onChange={handleChange} placeholder="Name" />
      <input type="text" name="price" value={product.price} onChange={handleChange} placeholder="Price" />
      <button type="submit">Save</button>
      {productId && <button type="button" onClick={handleDelete}>Delete</button>}
    </form>
  );
};

export default ProductForm;

import React, { useState, useEffect } from 'react';
import { addShop, updateShop, getShop, deleteShop } from '../services/shopService';

const ShopForm = ({ shopId }) => {
  const [shop, setShop] = useState({ name: '', address: '', contact: '', photos: [], reviews: [] });

  const handleChange = (e) => {
    setShop({ ...shop, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (shopId) {
      await updateShop(shopId, shop);
    } else {
      await addShop(shop);
    }
  };

  const handleDelete = async () => {
    if (shopId) {
      await deleteShop(shopId);
    }
  };

  const fetchShop = async () => {
    if (shopId) {
      const fetchedShop = await getShop(shopId);
      setShop(fetchedShop);
    }
  };

  useEffect(() => {
    fetchShop();
  }, [shopId]);

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={shop.name} onChange={handleChange} placeholder="Name" />
      <input type="text" name="address" value={shop.address} onChange={handleChange} placeholder="Address" />
      <input type="text" name="contact" value={shop.contact} onChange={handleChange} placeholder="Contact" />
      <button type="submit">Save</button>
      {shopId && <button type="button" onClick={handleDelete}>Delete</button>}
    </form>
  );
};

export default ShopForm;

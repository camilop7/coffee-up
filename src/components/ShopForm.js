import React from 'react';
import './ShopForm.css';

const ShopForm = () => (
  <div className="shop-form">
    <h3>Sign Up for Shop Updates</h3>
    <form>
      <input type="text" placeholder="Your Name" />
      <input type="email" placeholder="Your Email" />
      <button type="submit">Sign Up</button>
    </form>
  </div>
);

export default ShopForm;

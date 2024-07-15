import React from 'react';
import './ShopReviewCard.css';

const ShopReviewCard = ({ shop }) => {
  return (
    <div className="shop-review-card">
      <div className="shop-image">
        <img src={shop.image} alt="Shop" />
      </div>
      <div className="details">
        <p><strong>Location:</strong> <a href={shop.locationLink} target="_blank" rel="noopener noreferrer">View on Google Maps</a></p>
        <p><strong>Review:</strong> {shop.review}</p>
      </div>
    </div>
  );
};

export default ShopReviewCard;

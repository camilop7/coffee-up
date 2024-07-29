// src/components/ShopReviewCard.js

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Carousel styles
import './ShopReviewCard.css';

const ShopReviewCard = ({ shop }) => {
  return (
    <div className="shop-review-card">
      <Carousel showThumbs={false} autoPlay infiniteLoop>
        {shop.images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Shop ${index + 1}`} />
          </div>
        ))}
      </Carousel>
      <div className="shop-info">
        <p>{shop.review}</p>
        <a href={shop.locationLink} target="_blank" rel="noopener noreferrer" className="shop-profile-button">
          Visit Shop Profile
        </a>
      </div>
    </div>
  );
};

export default ShopReviewCard;

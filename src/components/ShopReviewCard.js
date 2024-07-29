// src/components/ShopReviewCard.js

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Carousel styles
import './ShopReviewCard.css';

const ShopReviewCard = ({ shops }) => {
  return (
    <div className="shop-review-card">
      <Carousel showThumbs={false} autoPlay infiniteLoop>
        {shops.map((shop, index) => (
          <div key={index} className="carousel-item">
            <div className="carousel-images">
              {shop.images && shop.images.map((image, imgIndex) => (
                <img key={imgIndex} src={image} alt={`Shop ${index + 1} Image ${imgIndex + 1}`} />
              ))}
            </div>
            <div className="shop-info">
              <p>{shop.review}</p>
              <a href={shop.locationLink} target="_blank" rel="noopener noreferrer" className="shop-profile-button">
                Visit Shop Profile
              </a>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ShopReviewCard;

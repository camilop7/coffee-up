import React from 'react';
import './BaristaProfileCard.css';

const BaristaProfileCard = ({ barista }) => {
  return (
    <div className="barista-profile-card">
      <div className="avatar">
        <img src={barista.avatar} alt="Barista Avatar" />
      </div>
      <div className="details">
        <h3>{barista.name}</h3>
        <p>{barista.introduction}</p>
      </div>
    </div>
  );
};

export default BaristaProfileCard;

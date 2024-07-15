// TechnicianProfileCard.js

import React from 'react';
import './TechnicianProfileCard.css'; // Example CSS file for styling

const TechnicianProfileCard = ({ technician }) => {
  return (
    <div className="technician-profile-card">
      <div className="avatar">
        <img src={technician.avatar} alt={technician.name} />
      </div>
      <div className="details">
        <h3>{technician.name}</h3>
        <p>{technician.specialty}</p>
        <p>{technician.experience} years of experience</p>
      </div>
    </div>
  );
};

export default TechnicianProfileCard;

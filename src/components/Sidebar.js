import React from 'react';
import './Sidebar.css';

const Sidebar = ({ onSelect }) => {
  const handleItemClick = (option) => {
    onSelect(option);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-title">Menu</div>
      <ul>
        <li onClick={() => handleItemClick('hireBarista')}>
          Hire a Barista
        </li>
        <li onClick={() => handleItemClick('hireTechnician')}>
          Hire a Technician
        </li>
        <li onClick={() => handleItemClick('retailShop')}>
          Retail Shop
        </li>
        <li onClick={() => handleItemClick('cuppingTickets')}>
          Cupping Tickets
        </li>
        <li onClick={() => handleItemClick('news')}>
          News
        </li>
        <li onClick={() => handleItemClick('trends')}>
          Trends
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

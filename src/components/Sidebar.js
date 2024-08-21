import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = (option) => {
    onSelect(option);
    setIsOpen(false); // Close sidebar after selecting an option
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <ul className="sidebar-items">
        <li onClick={() => handleItemClick('hireBarista')}>
          Hire a Barista
        </li>
        <li onClick={() => handleItemClick('hireTechnician')}>
          Hire a Technician
        </li>
        <li onClick={() => handleItemClick('cuppingTickets')}>
          Cupping Tickets
        </li>
        <li onClick={() => handleItemClick('shop')}>
          Shop
        </li>
        <li onClick={() => handleItemClick('chatbot')}>
          Chatbot
        </li>
        <li onClick={() => handleItemClick('news')}>
          News
        </li>
        <li onClick={() => handleItemClick('trends')}>
          Trends
        </li>
        <li onClick={() => handleItemClick('profile')}>
          Profile
        </li>
      </ul>
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        {isOpen ? 'Close' : 'Open'}
      </div>
    </div>
  );
};

export default Sidebar;

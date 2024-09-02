import React from 'react';
import './Sidebar.css';

const Sidebar = ({ onSelect, toggleDarkMode, isDarkMode }) => {
  const handleItemClick = (option) => {
    onSelect(option);
  };

  return (
    <div className="sidebar">
      {/* Dark Mode Toggle as the First Item */}
      <div className="sidebar-dark-mode-toggle">
        <button onClick={toggleDarkMode} className="toggle-button">
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>

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
    </div>
  );
};

export default Sidebar;

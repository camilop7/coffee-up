import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ toggleTheme }) => {
  const [isNightMode, setIsNightMode] = useState(false);

  const handleToggleTheme = () => {
    setIsNightMode(!isNightMode);
    toggleTheme();
  };

  return (
    <div className="sidebar">
      <h2>Barista Hub</h2>
      <nav>
        <ul>
          <li><NavLink to="/home" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
          <li><NavLink to="/hire-barista" className={({ isActive }) => (isActive ? 'active' : '')}>Hire a Barista</NavLink></li>
          <li><NavLink to="/hire-technician" className={({ isActive }) => (isActive ? 'active' : '')}>Hire a Technician</NavLink></li>
          <li><NavLink to="/cupping-tickets" className={({ isActive }) => (isActive ? 'active' : '')}>Cupping Tickets</NavLink></li>
          <li><NavLink to="/retail-shop" className={({ isActive }) => (isActive ? 'active' : '')}>Retail Shop</NavLink></li>
        </ul>
      </nav>
      <div className="sidebar-footer">
        <button className="login-logout-button">Login</button>
        <button className="night-mode-button" onClick={handleToggleTheme}>
          {isNightMode ? 'Day Mode' : 'Night Mode'}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

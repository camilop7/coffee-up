// src/components/NavBar.js
import React, { useState } from 'react';
import './NavBar.css';

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div className="navbar">
      <button onClick={toggleDrawer}>☰</button>
      <button className="avatar">👤</button>
      <div className={`drawer-menu ${drawerOpen ? 'active' : ''}`}>
        <a href="/about">About Us</a>
        <a href="/contact">Contact</a>
        <a href="/social">Social Media</a>
      </div>
    </div>
  );
};

export default NavBar;

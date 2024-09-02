// Navbar.js
import React from 'react';
import Avatar from './Avatar';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src="/logo1.png" alt="Company Logo" />
      </div>
      <div className="navbar-menu">
        <Avatar />
      </div>
    </div>
  );
};

export default Navbar;

import React, { useState } from 'react';
import './DrawerMenu.css';

const DrawerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="drawer-menu-container">
      <button className="drawer-menu-button" onClick={toggleMenu}>
        Menu
      </button>
      {isOpen && (
        <div className="drawer-menu">
          <a href="/login">Login</a>
          <a href="/contact">Contact</a>
          <a href="/about">About Us</a>
        </div>
      )}
    </div>
  );
};

export default DrawerMenu;

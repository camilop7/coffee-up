import React from 'react';
import DrawerMenu from './DrawerMenu';
import Avatar from './Avatar';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">Company Logo</div>
      <div className="navbar-menu">
        <DrawerMenu />
        <Avatar />
      </div>
    </div>
  );
};

export default Navbar;

// src/components/Sidebar.js

import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-title">Services</div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cupping-tickets">Cupping Tickets</Link>
        </li>
        <li>
          <Link to="/retail-shop">Retail Shop</Link>
        </li>
        <li>
          <Link to="/hire-barista">Hire Barista</Link>
        </li>
        <li>
          <Link to="/hire-technician">Hire Technician</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

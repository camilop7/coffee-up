// src/components/MainContent.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import HireBarista from './HireBarista';
import HireTechnician from './HireTechnician';
import CuppingTickets from './CuppingTickets';
import RetailShop from './RetailShop';
import './MainContent.css';

const MainContent = () => (
  <div className="main-content">
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/hire-barista" element={<HireBarista />} />
      <Route path="/hire-technician" element={<HireTechnician />} />
      <Route path="/cupping-tickets" element={<CuppingTickets />} />
      <Route path="/retail-shop" element={<RetailShop />} />
    </Routes>
  </div>
);

export default MainContent;

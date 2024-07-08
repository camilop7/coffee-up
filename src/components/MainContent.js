import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HireBarista from './HireBarista';
import HireTechnician from './HireTechnician';
import CuppingTickets from './CuppingTickets';
import RetailShop from './RetailShop';
import Home from './Home';

const MainContent = () => (
  <div className="main-content">
    <Routes>
      <Route path="/hire-barista" element={<HireBarista />} />
      <Route path="/hire-technician" element={<HireTechnician />} />
      <Route path="/cupping-tickets" element={<CuppingTickets />} />
      <Route path="/retail-shop" element={<RetailShop />} />
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </div>
);

export default MainContent;

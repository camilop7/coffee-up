// src/App.js
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleTheme = () => {
    setIsNightMode(!isNightMode);
  };

  return (
    <div className={`app ${isNightMode ? 'night-mode' : ''}`}>
      <Sidebar toggleTheme={toggleTheme} />
      <div className="main-content">
        <NavBar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;

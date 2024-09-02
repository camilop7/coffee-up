import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './App.css';

const App = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : ''}`}>
      <Navbar />
      <Sidebar
        onSelect={handleSelectOption}
        toggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
      />
      <MainContent selectedOption={selectedOption} />
      <div className="toggle-switch">
        <label>
          <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
          <span className="toggle-slider"></span>
        </label>
      </div>
    </div>
  );
};

export default App;

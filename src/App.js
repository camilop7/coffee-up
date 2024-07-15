import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './App.css';
import News from './components/News';
import Trends from './components/Trends';

const App = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="app">
      <Navbar />
      <Sidebar onSelect={handleSelectOption} />
      <MainContent selectedOption={selectedOption} />
      {selectedOption === 'news' && <News />}
      {selectedOption === 'trends' && <Trends />}
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './App.css';

const App = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectOption = (option) => {
    console.log('Selected Option:', option); // Log the selected option
    setSelectedOption(option);
  };

  console.log('Current Selected Option:', selectedOption); // Log the current selected option

  return (
    <div className="app">
      <Navbar />
      <Sidebar onSelect={handleSelectOption} />
      <MainContent selectedOption={selectedOption} />
    </div>
  );
};

export default App;

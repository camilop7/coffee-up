// src/App.js
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Login from "./components/Login";
import "./App.css";

function App() {
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleTheme = () => {
    setIsNightMode(!isNightMode);
  };

  return (
    <div className={`app ${isNightMode ? "night-mode" : ""}`}>
      <Sidebar toggleTheme={toggleTheme} />
      <MainContent />
      <Login />
    </div>
  );
}

export default App;

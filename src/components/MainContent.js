import React, { useState } from 'react';
import './MainContent.css';
import HireBarista from './HireBarista';
import HireTechnician from './HireTechnician';
import RetailShop from './RetailShop';
import CuppingTickets from './CuppingTickets';
import News from './News';
import Trends from './Trends';

const MainContent = ({ selectedOption }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentComponent, setCurrentComponent] = useState(null);

  // Function to handle delayed loading
  const loadComponent = (component) => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentComponent(component);
      setIsLoading(false);
    }, 500); // 0.5 second delay
  };

  // React to changes in selectedOption
  React.useEffect(() => {
    switch (selectedOption) {
      case 'hireBarista':
        loadComponent(<HireBarista />);
        break;
      case 'hireTechnician':
        loadComponent(<HireTechnician />);
        break;
      case 'retailShop':
        loadComponent(<RetailShop />);
        break;
      case 'cuppingTickets':
        loadComponent(<CuppingTickets />);
        break;
      case 'news':
        loadComponent(<News />);
        break;
      case 'trends':
        loadComponent(<Trends />);
        break;
      default:
        setCurrentComponent(null);
        break;
    }
  }, [selectedOption]);

  return (
    <div className="main-content">
      {isLoading ? (
        <div className="loading-indicator">
          Loading...
        </div>
      ) : (
        currentComponent
      )}
    </div>
  );
};

export default MainContent;

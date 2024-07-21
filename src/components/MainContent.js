import React, { useState, useEffect } from 'react';
import ProfileForm from './ProfileForm';
import ShopForm from './ShopForm';
import ProductForm from './ProductForm';
import ChatbotForm from './ChatbotForm';
import HireBarista from './HireBarista';
import HireTechnician from './HireTechnician';
import RetailShop from './RetailShop';
import CuppingTickets from './CuppingTickets';

const MainContent = ({ selectedOption }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentComponent, setCurrentComponent] = useState(null);

  const loadComponent = (component) => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentComponent(component);
      setIsLoading(false);
    }, 500);
  };

  useEffect(() => {
    switch (selectedOption) {
      case 'profile':
        loadComponent(<ProfileForm />);
        break;
      case 'shop':
        loadComponent(<ShopForm />);
        break;
      case 'product':
        loadComponent(<ProductForm />);
        break;
      case 'chatbot':
        loadComponent(<ChatbotForm />);
        break;
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

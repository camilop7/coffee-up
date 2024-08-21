import React, { useState, useEffect, lazy, Suspense } from 'react';

const ProfileForm = lazy(() => import('./ProfileForm'));
const Shop = lazy(() => import('./Shop'));
const ProductForm = lazy(() => import('./ProductForm'));
const ChatbotForm = lazy(() => import('./ChatbotForm'));
const HireBarista = lazy(() => import('./HireBarista'));
const HireTechnician = lazy(() => import('./HireTechnician'));
const RetailShop = lazy(() => import('./RetailShop'));
const CuppingTickets = lazy(() => import('./CuppingTickets'));

const MainContent = ({ selectedOption }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentComponent, setCurrentComponent] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    let component;

    switch (selectedOption) {
      case 'profile':
        component = <ProfileForm />;
        break;
        case 'shop':
          component = <Shop />;
        break;
      case 'product':
        component = <ProductForm />;
        break;
      case 'chatbot':
        component = <ChatbotForm />;
        break;
      case 'hireBarista':
        component = <HireBarista />;
        break;
      case 'hireTechnician':
        component = <HireTechnician />;
        break;
      case 'retailShop':
        component = <RetailShop />;
        break;
      case 'cuppingTickets':
        component = <CuppingTickets />;
        break;
      default:
        component = null;
        break;
    }

    setTimeout(() => {
      setCurrentComponent(component);
      setIsLoading(false);
    }, 500);
  }, [selectedOption]);

  return (
    <div className="main-content">
      {isLoading ? (
        <div className="loading-indicator">
          Loading...
        </div>
      ) : (
        <Suspense fallback={<div className="loading-indicator">Loading...</div>}>
          {currentComponent}
        </Suspense>
      )}
    </div>
  );
};

export default MainContent;

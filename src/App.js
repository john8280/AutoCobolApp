// App.js
import React from 'react';
import './App.css'; // Import the existing CSS file
import Login from './Login';
import InventoryManagement from './InventoryManagement';
import OrderProcessing from './OrderProcessing';
import ReportingAnalytics from './ReportingAnalytics';

const App = () => {
  const isLoggedIn = true; // Placeholder for checking user authentication

  return (
    <div className="container">
      {isLoggedIn ? (
        <>
          <InventoryManagement />
          <OrderProcessing />
          <ReportingAnalytics />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;

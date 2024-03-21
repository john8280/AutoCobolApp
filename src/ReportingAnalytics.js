// ReportingAnalytics.js
import React from 'react';

const ReportingAnalytics = () => {
  // Dummy data for reporting and analytics
  const salesData = [
    { month: 'January', sales: 100 },
    { month: 'February', sales: 150 },
    { month: 'March', sales: 200 },
    { month: 'April', sales: 180 },
  ];

  return (
    <div>
      <h2>Reporting and Analytics</h2>
      <ul>
        {salesData.map((data, index) => (
          <li key={index}>
            {data.month}: {data.sales} units sold
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReportingAnalytics;

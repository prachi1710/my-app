import React, { useState } from 'react';
import UserDetails from './UserDetails';
import AccountCreation from './AccountCreation';
import './App.css';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('userDetails');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="dashboard-container">
      <div className="tab-buttons">
        <button
          className={activeTab === 'userDetails' ? 'active' : ''}
          onClick={() => handleTabChange('userDetails')}
        >
          User Details
        </button>
        <button
          className={activeTab === 'accountCreation' ? 'active' : ''}
          onClick={() => handleTabChange('accountCreation')}
        >
          Account Creation
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'userDetails' && <UserDetails />}
        {activeTab === 'accountCreation' && <AccountCreation />}
      </div>
    </div>
  );
};

export default Dashboard;

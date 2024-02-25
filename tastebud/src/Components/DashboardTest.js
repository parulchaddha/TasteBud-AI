// Dashboard.js
import React, { useEffect } from 'react';
import { useUser } from '../contexts/userContext';

const Dashboard = () => {
  const { userData } = useUser();

  useEffect(() => {
    console.log('User Data in Dashboard:', userData); // Check if userData is null or has valid data
  }, [userData]);

  return (
    <div>
      <h2>Dashboard</h2>
      {userData ? (
        <div>
          <p>Email: {userData.email}</p>
          <p>Username: {userData.username}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default Dashboard;

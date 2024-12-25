import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Dashboard = () => {
  const { role } = useContext(AuthContext);

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      {role === 'Admin' ? (
        <p>You have Admin access.</p>
      ) : (
        <p>You have limited access (Company Role).</p>
      )}
    </div>
  );
};

export default Dashboard;

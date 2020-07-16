import React, { useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';

const Dashboard = () => {
  const auth = useAuth();

  useEffect(() => {
    console.log('dash-auth', auth);
  }, [auth]);

  return <div>Dashboard Logged Users Only!</div>;
};

export default Dashboard;

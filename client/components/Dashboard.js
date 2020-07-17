import React, { useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import query from '../queries/CurrentUser';

const Dashboard = () => {
  const { loading, error, data } = useQuery(query);
  const history = useHistory();

  if (loading) return 'Validating user';
  if (error) return `Error authorizing user`;
  if (data.user === null) {
    history.push('/signup');
  }
  return (
    <div>
      <h1>Welcome Back!</h1>
      <p>{data && data.user && data.user.email}</p>
    </div>
  );
};

export default Dashboard;

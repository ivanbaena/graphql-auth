import React, { useEffect } from 'react';
import query from '../queries/CurrentUser';

export const useAuth = (client) => {
  const { user } = client.readQuery({ query });
  useEffect(() => {
    console.log(client);
    console.log('res', user);
  }, [user]);

  return user;
};

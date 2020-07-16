import React, { useEffect, useState } from 'react';
import query from '../queries/CurrentUser';
import { useQuery } from '@apollo/react-hooks';

export const useAuth = () => {
  const { loading, error, data } = useQuery(query, {
    onCompleted: (data) => {
      console.log('Completed!', data);
    },
  });
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    console.log(data);
  }, [loading]);

  return data;
};

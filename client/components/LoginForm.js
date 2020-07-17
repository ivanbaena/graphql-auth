import React, { useEffect } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import AuthForm from './AuthForm';
import mutation from '../ mutations/login';
import query from '../queries/CurrentUser';

const LoginForm = (props) => {
  const { loading, error, data } = useQuery(query);
  const [
    login,
    { loading: mutationLoading, error: mutationError, data: mutationData },
  ] = useMutation(mutation, {
    refetchQueries: [{ query }],
  });
  const history = useHistory();

  useEffect(() => {
    if (data && data.user && data.user.email) {
      history.push('/dashboard/');
    }
  }, [loading]);

  useEffect(() => {
    if (mutationData && mutationData.login && mutationData.login.email) {
      history.push('/dashboard');
    }
  }, [mutationLoading]);

  const onSubmit = ({ email, password }) => {
    login({ variables: { email, password } });
  };

  return (
    <div className='container'>
      <h3>Login</h3>
      <AuthForm
        onSubmit={onSubmit}
        error={mutationError}
        loading={mutationLoading}
      />
    </div>
  );
};

export default LoginForm;

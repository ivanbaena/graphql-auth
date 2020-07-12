import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import AuthForm from './AuthForm';
import mutation from '../ mutations/login';
import query from '../queries/CurrentUser';

const LoginForm = () => {
  const [
    login,
    { loading: mutationLoading, error: mutationError },
  ] = useMutation(mutation, {
    refetchQueries: [{ query }],
  });

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

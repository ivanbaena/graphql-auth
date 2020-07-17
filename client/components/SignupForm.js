import React, { useEffect } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { useHistory } from 'react-router-dom';

import AuthForm from './AuthForm';
import mutation from '../ mutations/Signup';
import query from '../queries/CurrentUser';

const SignupForm = () => {
  const { loading, error, data } = useQuery(query);
  const [
    signup,
    { loading: mutationLoading, error: mutationError, data: mutationData },
  ] = useMutation(mutation, {
    refetchQueries: [{ query }],
  });
  const history = useHistory();

  const onSubmit = ({ email, password }) => {
    signup({ variables: { email, password } });
  };

  useEffect(() => {
    if (data && data.user && data.user.email) {
      history.push('/dashboard');
    }
  }, [loading]);

  useEffect(() => {
    if (mutationData && mutationData.signup && mutationData.signup.email) {
      history.push('/dashboard');
    }
  }, [mutationLoading]);

  return (
    <div>
      <h3>signUp</h3>
      <AuthForm
        onSubmit={onSubmit}
        error={mutationError}
        loading={mutationLoading}
      />
    </div>
  );
};

export default SignupForm;

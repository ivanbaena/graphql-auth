import React, { useState } from 'react';

const AuthForm = ({ onSubmit, error, loading }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <div className='row'>
      <form className='col s4' onSubmit={onFormSubmit}>
        <div className='input-field'>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='email'
          />
        </div>
        <div className='input-field'>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='password'
            type='password'
          />
        </div>
        <button className='btn'>Submit</button>
      </form>
      {error && <p>Error :( Please try again</p>}
    </div>
  );
};

export default AuthForm;

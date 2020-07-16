import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';

import App from './components/App';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Dashboard from './components/Dashboard';

const link = new HttpLink({ uri: '/graphql', credentials: 'same-origin' });
const cache = new InMemoryCache({
  dataIdFromObject: (o) => o.id,
});
const client = new ApolloClient({
  connectToDevTools: true,
  cache,
  link,
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Route path='/'>
          <App>
            <Route path='/login'>
              <LoginForm />
            </Route>
            <Route path='/signup'>
              <SignupForm />
            </Route>
            <Route path='/dashboard'>
              <Dashboard />
            </Route>
          </App>
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));

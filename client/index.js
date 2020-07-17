import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';

import App from './components/App';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Dashboard from './components/Dashboard';

const cache = new InMemoryCache({
  dataIdFromObject: (o) => o.id,
});
const options = {
  cache,
  connectToDevTools: true,
  uri: 'http://localhost:4000/graphql',
  credentials: 'same-origin',
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
};
const client = new ApolloClient({
  ...options,
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
              <Dashboard client={client} />
            </Route>
          </App>
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));

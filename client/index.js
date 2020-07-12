import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';

import App from './components/App';
import LoginForm from './components/LoginForm';

const link = new HttpLink({ uri: '/graphql', credentials: 'same-origin' });

const client = new ApolloClient({
  cache: new InMemoryCache({
    dataIdFromObject: (o) => o.id,
  }),
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
          </App>
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));

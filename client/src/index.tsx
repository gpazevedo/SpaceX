import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloClient,
  NormalizedCacheObject,
  ApolloProvider
} from '@apollo/client';
import Pages from './pages';
import injectStyles from './styles';
import { cache } from './cache';


const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
      uri: 'http://localhost:4000/graphql',
    headers: {
      authorization: localStorage.getItem('token') || '',
    },
});

injectStyles();
ReactDOM.render(
  <ApolloProvider client={client}>
    <Pages />
  </ApolloProvider>,
  document.getElementById('root')
);


import { ApolloClient, HttpLink, from } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { RetryLink } from '@apollo/client/link/retry';
import { InMemoryCache } from '@apollo/client/cache';

const errorLink = onError(({ response, graphQLErrors, networkError }) => {
  console.log({graphQLErrors});
  console.log({response});

  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path, extensions }) => {
      if (extensions && extensions.code === 'UNAUTHENTICATED') {
          localStorage.removeItem('token');
          // edit response so downstream can cat an error message
          response.errors = [new Error('UNAUTHENTICATED')]
      }
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    });

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});

const link = from([
  authLink,
  errorLink,
  new RetryLink({
    attempts: {
      max: 10
    }
  }),
  new HttpLink({
    uri: 'https://api.lql.io/graphql',
    credentials: 'include'
  })
]);

let client = null;

export const getClient = () => {
  if (client) return client;
  client = new ApolloClient({
    cache: new InMemoryCache(),
    link,
    headers: {
      'client-name': 'WebInc',
      'client-version': '1.0.0'
    },
    connectToDevTools: process.env.NODE_ENV === 'production' ? false : true
  });
  return client;
};

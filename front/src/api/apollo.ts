import { ApolloClient, ApolloLink, InMemoryCache, split } from '@apollo/client';
import { HTTP_LINK, TOKEN, WS_LINK } from '../configs';

import AsyncStorage from '@react-native-community/async-storage';
import { WebSocketLink } from '@apollo/client/link/ws';
import { createUploadLink } from 'apollo-upload-client';
import { getMainDefinition } from '@apollo/client/utilities';
import { notifierLink } from './notifier';
import { setContext } from '@apollo/client/link/context';

const wsLink = new WebSocketLink({
  uri: WS_LINK,
  options: {
    reconnect: true,
  },
});

const uploadLink = createUploadLink({
  uri: HTTP_LINK,
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  uploadLink,
);

const authLink = setContext(async (_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = await AsyncStorage.getItem(TOKEN);
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

export const client = new ApolloClient({
  link: ApolloLink.from([authLink, splitLink, notifierLink]),
  cache: new InMemoryCache({}),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
});

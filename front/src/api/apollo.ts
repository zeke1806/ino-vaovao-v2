import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { API_URL, TOKEN } from 'src/configs';
import { Plugins } from '../utils/capacitor';
import { createUploadLink } from 'apollo-upload-client'

const { Storage } = Plugins;

const httpLink = createUploadLink({
  uri: API_URL
});

const authLink = setContext(async (_, { headers }) => {
  const token = (await Storage.get({key: TOKEN})).value;
  const newHeaders = {
    ...headers,
    authorization: token ? token : ''
  } as Record<string, any>;
  return {
    headers: newHeaders
  }
});

const cache = new InMemoryCache();

export const apollo = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
});

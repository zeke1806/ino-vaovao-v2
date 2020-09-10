import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { HTTP_LINK, TOKEN } from '../configs';
import AsyncStorage from '@react-native-community/async-storage';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: HTTP_LINK,
});

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
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

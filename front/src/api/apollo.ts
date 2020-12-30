import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { API_URL } from 'src/configs'

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: API_URL,
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
export const apollo = new ApolloClient({
  link: httpLink,
  cache,
})

import { InMemoryCache } from '@apollo/client';

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        messages: {
          keyArgs: ['discussionId'],
        },
      },
    },
  },
});

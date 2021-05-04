import { ApolloClient, InMemoryCache } from '@apollo/client';

const apiUrl =
  process.env.API_URL ??
  'https://json-placeholder-graphql.herokuapp.com/graphql';

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: apiUrl,
});

import { createClient } from 'urql';

// const apiUrl = process.env.API_URL ?? 'https://json-placeholder-graphql.herokuapp.com/graphql';
// const apiUrl = process.env.API_URL ?? 'https://snowtooth.moonhighway.com/';
const apiUrl = process.env.API_URL ?? 'https://graphqlzero.almansi.me/api';

// NOTE(requestPolicy,suspense): useSWR の fetcher として利用するため
export const client = createClient({
  requestPolicy: 'network-only',
  suspense: false,
  url: apiUrl,
});

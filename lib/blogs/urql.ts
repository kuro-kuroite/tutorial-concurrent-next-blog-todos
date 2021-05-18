import { createClient } from 'urql';

const apiUrl = process?.env.NEXT_PUBLIC_BLOG_API_URL ?? '';

// NOTE(requestPolicy,suspense): useSWR の fetcher として利用するため
export const client = createClient({
  requestPolicy: 'network-only',
  suspense: false,
  url: apiUrl,
});

import { ApolloError, gql } from '@apollo/client';

import type {
  BlogByIdQuery,
  BlogIdsQuery,
  BlogListQuery,
} from '../types/api/jsonPlaceHolder';
import type { BlogParams } from '../types/blog';
import { client } from './apollo/apollo-client';

export const fetchAllBlogsData = async (): Promise<{
  data: BlogListQuery;
  error?: ApolloError;
  loading: boolean;
}> => {
  // const res = await fetch(new URL(apiUrl));
  // // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  // const blogs: Blog[] = await res.json();

  const { data, error, loading } = await client.query<BlogListQuery>({
    query: gql`
      query BlogList {
        posts {
          id
          title
        }
      }
    `,
  });

  return { data, error, loading };
};

export const fetchAllBlogIds = async (): Promise<{
  data: BlogIdsQuery;
  error?: ApolloError;
  loading: boolean;
}> => {
  // const res = await fetch(new URL(apiUrl));
  // // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  // const blogs: Blog[] = await res.json();
  // const ids = blogs.map(({ id }) => ({ id }));
  // return ids;

  // TODO: error 変数を返却
  const { data, error, loading } = await client.query<BlogIdsQuery>({
    query: gql`
      query BlogIds {
        posts {
          id
        }
      }
    `,
  });

  return { data, error, loading };
};

export const fetchBlogData = async (
  id: BlogParams['id']
): Promise<{
  data: BlogByIdQuery;
  error?: ApolloError;
  loading: boolean;
}> => {
  // const res = await fetch(new URL(`${apiUrl}/${id}/`));
  // // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  // const blog: Blog = await res.json();

  const { data, error, loading } = await client.query<BlogByIdQuery>({
    query: gql`
      query BlogById($id: Int!) {
        post(id: $id) {
          id
          title
          body
        }
      }
    `,
    variables: {
      id: parseInt(id),
    },
  });

  return { data, error, loading };
};

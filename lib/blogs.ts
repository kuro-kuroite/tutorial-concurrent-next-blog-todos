import { gql } from 'urql';

import type {
  BlogByIdQuery,
  BlogIdsQuery,
  BlogListQuery,
} from '../types/api/jsonPlaceHolder';
import { BlogById, BlogIds, BlogList, BlogParams } from '../types/blog';
import { client } from './urql/urql-client';

export const fetchAllBlogsData = async (): Promise<BlogList['blogs']> => {
  // const res = await fetch(new URL(apiUrl));
  // // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  // const blogs: Blog[] = await res.json();

  const { data, error } = await client
    .query<BlogListQuery>(
      gql`
        query BlogList {
          posts {
            data {
              id
              title
            }
          }
        }
      `
    )
    .toPromise();

  if (error) {
    throw error;
  }

  if (!data) {
    throw error;
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  const blogs: BlogList['blogs'] = data.posts.data.map(({ id, ...rest }) => ({
    id: parseInt(id),
    ...rest,
  }));

  return blogs;
};

export const fetchAllBlogIds = async (): Promise<BlogIds['blogs']> => {
  // const res = await fetch(new URL(apiUrl));
  // // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  // const blogs: Blog[] = await res.json();
  // const ids = blogs.map(({ id }) => ({ id }));
  // return ids;

  // TODO: error 変数を返却
  const { data, error } = await client
    .query<BlogIdsQuery>(
      gql`
        query BlogIds {
          posts {
            data {
              id
            }
          }
        }
      `
    )
    .toPromise();

  if (error) {
    throw error;
  }

  if (!data) {
    throw error;
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  const blogs: BlogIds['blogs'] = data.posts.data.map(({ id }) => ({
    id: parseInt(id),
  }));

  return blogs;
};

export const fetchBlogData = async (
  id: BlogParams['id']
): Promise<BlogById['blog']> => {
  // const res = await fetch(new URL(`${apiUrl}/${id}/`));
  // // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  // const blog: Blog = await res.json();

  const { data, error } = await client
    .query<BlogByIdQuery>(
      gql`
        query BlogById($id: ID!) {
          post(id: $id) {
            id
            title
            body
          }
        }
      `,
      {
        id: parseInt(id),
      }
    )
    .toPromise();

  if (error) {
    throw error;
  }

  if (!data) {
    throw error;
  }

  // HACK: for { post: { id: null, title: null, body: null, __typename: 'Post' } }
  if (
    Object.entries(data?.post)
      .map(([, v]) => v)
      .some((v) => v === null)
  ) {
    throw 'No data';
  }

  const blog = {
    ...data.post,
    id: parseInt(data.post.id),
  };

  return blog;
};

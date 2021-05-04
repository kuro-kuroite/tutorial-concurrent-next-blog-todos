import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Album = {
  __typename?: 'Album';
  user: Maybe<User>;
  userId: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
  title: Maybe<Scalars['String']>;
};

export type Comment = {
  __typename?: 'Comment';
  post: Maybe<Post>;
  postId: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
  name: Maybe<Scalars['String']>;
  email: Maybe<Scalars['String']>;
  body: Maybe<Scalars['String']>;
};

export type Photo = {
  __typename?: 'Photo';
  album: Maybe<Album>;
  albumId: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
  title: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
  thumbnailUrl: Maybe<Scalars['String']>;
};

export type Post = {
  __typename?: 'Post';
  user: Maybe<User>;
  userId: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
  title: Maybe<Scalars['String']>;
  body: Maybe<Scalars['String']>;
};

export type RootQueryType = {
  __typename?: 'RootQueryType';
  post: Maybe<Post>;
  posts: Maybe<Array<Maybe<Post>>>;
  comment: Maybe<Comment>;
  comments: Maybe<Array<Maybe<Comment>>>;
  album: Maybe<Album>;
  albums: Maybe<Array<Maybe<Album>>>;
  photo: Maybe<Photo>;
  photos: Maybe<Array<Maybe<Photo>>>;
  todo: Maybe<Todo>;
  todos: Maybe<Array<Maybe<Todo>>>;
  user: Maybe<User>;
  users: Maybe<Array<Maybe<User>>>;
};


export type RootQueryTypePostArgs = {
  id: Maybe<Scalars['Int']>;
};


export type RootQueryTypePostsArgs = {
  userId: Maybe<Scalars['Int']>;
};


export type RootQueryTypeCommentArgs = {
  id: Maybe<Scalars['Int']>;
};


export type RootQueryTypeCommentsArgs = {
  postId: Maybe<Scalars['Int']>;
};


export type RootQueryTypeAlbumArgs = {
  id: Maybe<Scalars['Int']>;
};


export type RootQueryTypeAlbumsArgs = {
  userId: Maybe<Scalars['Int']>;
};


export type RootQueryTypePhotoArgs = {
  id: Maybe<Scalars['Int']>;
};


export type RootQueryTypePhotosArgs = {
  albumId: Maybe<Scalars['Int']>;
};


export type RootQueryTypeTodoArgs = {
  id: Maybe<Scalars['Int']>;
};


export type RootQueryTypeTodosArgs = {
  userId: Maybe<Scalars['Int']>;
  completed: Maybe<Scalars['Boolean']>;
};


export type RootQueryTypeUserArgs = {
  id: Maybe<Scalars['Int']>;
};

export type Todo = {
  __typename?: 'Todo';
  user: Maybe<User>;
  userId: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
  title: Maybe<Scalars['String']>;
  completed: Maybe<Scalars['Boolean']>;
};

export type User = {
  __typename?: 'User';
  id: Maybe<Scalars['Int']>;
  name: Maybe<Scalars['String']>;
  username: Maybe<Scalars['String']>;
  email: Maybe<Scalars['String']>;
  phone: Maybe<Scalars['String']>;
  website: Maybe<Scalars['String']>;
};

export type BlogListQueryVariables = Exact<{ [key: string]: never; }>;


export type BlogListQuery = { __typename?: 'RootQueryType', posts: Maybe<Array<Maybe<{ __typename?: 'Post', id: Maybe<number>, title: Maybe<string> }>>> };

export type BlogIdsQueryVariables = Exact<{ [key: string]: never; }>;


export type BlogIdsQuery = { __typename?: 'RootQueryType', posts: Maybe<Array<Maybe<{ __typename?: 'Post', id: Maybe<number> }>>> };

export type BlogByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type BlogByIdQuery = { __typename?: 'RootQueryType', post: Maybe<{ __typename?: 'Post', id: Maybe<number>, title: Maybe<string>, body: Maybe<string> }> };


export const BlogListDocument = gql`
    query BlogList {
  posts {
    id
    title
  }
}
    `;

/**
 * __useBlogListQuery__
 *
 * To run a query within a React component, call `useBlogListQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlogListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlogListQuery({
 *   variables: {
 *   },
 * });
 */
export function useBlogListQuery(baseOptions?: Apollo.QueryHookOptions<BlogListQuery, BlogListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BlogListQuery, BlogListQueryVariables>(BlogListDocument, options);
      }
export function useBlogListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BlogListQuery, BlogListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BlogListQuery, BlogListQueryVariables>(BlogListDocument, options);
        }
export type BlogListQueryHookResult = ReturnType<typeof useBlogListQuery>;
export type BlogListLazyQueryHookResult = ReturnType<typeof useBlogListLazyQuery>;
export type BlogListQueryResult = Apollo.QueryResult<BlogListQuery, BlogListQueryVariables>;
export const BlogIdsDocument = gql`
    query BlogIds {
  posts {
    id
  }
}
    `;

/**
 * __useBlogIdsQuery__
 *
 * To run a query within a React component, call `useBlogIdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlogIdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlogIdsQuery({
 *   variables: {
 *   },
 * });
 */
export function useBlogIdsQuery(baseOptions?: Apollo.QueryHookOptions<BlogIdsQuery, BlogIdsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BlogIdsQuery, BlogIdsQueryVariables>(BlogIdsDocument, options);
      }
export function useBlogIdsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BlogIdsQuery, BlogIdsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BlogIdsQuery, BlogIdsQueryVariables>(BlogIdsDocument, options);
        }
export type BlogIdsQueryHookResult = ReturnType<typeof useBlogIdsQuery>;
export type BlogIdsLazyQueryHookResult = ReturnType<typeof useBlogIdsLazyQuery>;
export type BlogIdsQueryResult = Apollo.QueryResult<BlogIdsQuery, BlogIdsQueryVariables>;
export const BlogByIdDocument = gql`
    query BlogById($id: Int!) {
  post(id: $id) {
    id
    title
    body
  }
}
    `;

/**
 * __useBlogByIdQuery__
 *
 * To run a query within a React component, call `useBlogByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlogByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlogByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useBlogByIdQuery(baseOptions: Apollo.QueryHookOptions<BlogByIdQuery, BlogByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BlogByIdQuery, BlogByIdQueryVariables>(BlogByIdDocument, options);
      }
export function useBlogByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BlogByIdQuery, BlogByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BlogByIdQuery, BlogByIdQueryVariables>(BlogByIdDocument, options);
        }
export type BlogByIdQueryHookResult = ReturnType<typeof useBlogByIdQuery>;
export type BlogByIdLazyQueryHookResult = ReturnType<typeof useBlogByIdLazyQuery>;
export type BlogByIdQueryResult = Apollo.QueryResult<BlogByIdQuery, BlogByIdQueryVariables>;
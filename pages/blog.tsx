import { GetStaticProps, NextPage } from 'next';
import React, { VFC } from 'react';

import { Blog, Props as BlogProps } from '../components/Blog/Blog';
import { Layout } from '../components/Layout/Layout';
import { fetchAllBlogsData } from '../lib/blogs';

const PureBlogPage: VFC<PureProps> = ({ blogs }) => (
  <Layout title="Blog">{blogs && <Blog {...{ blogs }} />}</Layout>
);

const BlogPage: NextPage<Props> = ({ blogs }) => {
  // TODO(blogs): loading, failure

  return <PureBlogPage {...{ blogs }} />;
};

export default BlogPage;

export type PureProps = Props;

export type Props = StaticProps;

export type StaticProps = BlogProps;

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  // TODO: validate data using error
  const { data } = await fetchAllBlogsData();
  const blogs = data.posts;

  return {
    props: { blogs },
  };
};

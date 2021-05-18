import { GetStaticProps, NextPage } from 'next';
import React, { VFC } from 'react';

import { Blog, Props as BlogProps } from '../components/Blog/Blog';
import { Layout } from '../components/Layout/Layout';
import { fetchAllBlogsData } from '../lib/blogs/blogs';

const PureBlogPage: VFC<PureProps> = ({ blogs }) => (
  <Layout title="Blog">
    <Blog {...{ blogs }} />
  </Layout>
);

const BlogPage: NextPage<Props> = ({ blogs }) => {
  return <PureBlogPage {...{ blogs }} />;
};

export default BlogPage;

export type PureProps = Props;

export type Props = StaticProps;

export type StaticProps = BlogProps;

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  try {
    const data = await fetchAllBlogsData();
    const blogs = data;

    return {
      props: { blogs },
      revalidate: 3,
    };
  } catch (error) {
    return {
      // notFound: true,
      redirect: {
        destination: '/main/',
        permanent: false,
      },
    };
  }
};

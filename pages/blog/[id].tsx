import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { VFC } from 'react';

import {
  BlogDetail,
  Props as BlogDetailProps,
} from '../../components/BlogDetail/BlogDetail';
import { Layout } from '../../components/Layout/Layout';
import { fetchAllBlogIds, fetchBlogData } from '../../lib/blogs/blogs';
import { BlogParams } from '../../types/blog';

const PureBlogDetailPage: VFC<PureProps> = ({ blog: { body, id, title } }) => (
  <Layout title="Blog">
    <BlogDetail {...{ body, id, title }} />
  </Layout>
);

const BlogDetailPage: NextPage<Props> = ({ blog }) => {
  const { isFallback } = useRouter();

  if (isFallback) {
    return (
      <Layout title="Blog">
        <p>blog を取得中...</p>
      </Layout>
    );
  }

  return <PureBlogDetailPage {...{ blog }} />;
};

export default BlogDetailPage;

export type StaticProps = {
  blog: BlogDetailProps;
};

export type PureProps = Props;

export type Props = StaticProps;

export const getStaticPaths: GetStaticPaths<BlogParams> = async () => {
  const blog = await fetchAllBlogIds();
  const paths = blog.map(({ id }) => ({
    params: {
      id: id.toString(),
    },
  }));

  return {
    fallback: true,
    paths,
  };
};

export const getStaticProps: GetStaticProps<StaticProps, BlogParams> = async ({
  params: { id } = { id: '' },
}) => {
  try {
    const blog = await fetchBlogData(id);

    return {
      props: { blog },
      revalidate: 3,
    };
  } catch (error) {
    return {
      // notFound: true,
      redirect: {
        destination: '/blog/',
        permanent: false,
      },
    };
  }
};

import React, { Suspense, VFC } from 'react';

import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
import { BlogList, Props as BlogListProps } from './BlogList/BlogList';

export const PureBlog: VFC<PureProps> = ({ blogs }) => (
  <ErrorBoundary fallback={<p>blog リストを取得できませんでした。</p>}>
    <Suspense fallback={<p>blog リストを取得中...</p>}>
      <BlogList {...{ blogs }} />
    </Suspense>
  </ErrorBoundary>
);

export const Blog: VFC<Props> = ({ blogs }) => {
  return <PureBlog {...{ blogs }} />;
};

export type PureProps = Props;

export type Props = BlogListProps;

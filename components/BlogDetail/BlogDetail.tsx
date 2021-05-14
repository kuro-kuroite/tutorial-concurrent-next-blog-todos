import React, { Suspense, VFC } from 'react';

import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
import { Blog, Props as BlogProps } from './Blog/Blog';

export const PureBlogDetail: VFC<PureProps> = ({ body, id, title }) => (
  <ErrorBoundary fallback={<p>blog を取得できませんでした。</p>}>
    <Suspense fallback={<p>blog を取得中...</p>}>
      <Blog {...{ body, id, title }} />
    </Suspense>
  </ErrorBoundary>
);

export const BlogDetail: VFC<Props> = ({ body, id, title }) => {
  return <PureBlogDetail {...{ body, id, title }} />;
};

export type PureProps = Props;

export type Props = BlogProps;

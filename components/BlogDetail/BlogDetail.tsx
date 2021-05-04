import React, { FC } from 'react';

import { Blog, Props as BlogProps } from './Blog/Blog';

export const PureBlogDetail: FC<PureProps> = ({ body, id, title }) => (
  <Blog {...{ body, id, title }} />
);

export const BlogDetail: FC<Props> = ({ body, id, title }) => {
  return <PureBlogDetail {...{ body, id, title }} />;
};

export type PureProps = Props;

export type Props = BlogProps;

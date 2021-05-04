import React, { FC } from 'react';

import { BlogList, Props as BlogListProps } from './BlogList/BlogList';

export const PureBlog: FC<PureProps> = ({ blogs }) => (
  <BlogList {...{ blogs }} />
);

export const Blog: FC<Props> = ({ blogs }) => {
  return <PureBlog {...{ blogs }} />;
};

export type PureProps = Props;

export type Props = BlogListProps;

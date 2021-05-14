import Link from 'next/link';
import React, { VFC } from 'react';

export const PureBlogItem: VFC<PureProps> = ({ id, title }) => (
  <li>
    <span className="text-white">{id}: </span>
    <Link href={`/blog/${id}`}>
      <a className="cursor-pointer text-white border-solid border-0 border-b border-gray-500 hover:bg-gray-600">
        {title}
      </a>
    </Link>
  </li>
);

export const BlogItem: VFC<Props> = ({ id, title }) => {
  return <PureBlogItem {...{ id, title }} />;
};

export type PureProps = Props;

export type Props = {
  id: number;
  title: string;
};

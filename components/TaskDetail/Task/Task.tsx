import Link from 'next/link';
import React, { FC } from 'react';

export const PureTask: FC<PureProps> = ({ id, title }) => (
  <article className="text-white">
    <h2 className="pb-4">ID: {id}</h2>
    <h1 className="mb-8 text-xl font-bold">{title}</h1>
    <Link href="/task/">
      <a className="flex w-max items-center cursor-pointer mt-12 text-blue-500 border-solid border-0 border-b border-blue-500">
        <svg
          className="w-6 h-6 mr-3"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
            fillRule="evenodd"
          ></path>
        </svg>
        <span>Back to task</span>
      </a>
    </Link>
  </article>
);

export const Task: FC<Props> = ({ id, title }) => {
  return <PureTask {...{ id, title }} />;
};

export type PureProps = Props;

export type Props = {
  id: number;
  title: string;
};

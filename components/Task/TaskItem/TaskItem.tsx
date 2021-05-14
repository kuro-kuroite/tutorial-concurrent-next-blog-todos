import Link from 'next/link';
import React, { MouseEventHandler, VFC } from 'react';

export const PureTaskItem: VFC<PureProps> = ({
  id,
  onDeleteTaskClick,
  onEditTaskClick,
  title,
}) => (
  <li className="flex items-center space-x-2 text-white">
    <div className="flex-1">
      <span>{id}: </span>
      <Link href={`/task/${id}`}>
        <a className="cursor-pointer text-white border-solid border-0 border-b border-gray-500 hover:bg-gray-600">
          {title}
        </a>
      </Link>
    </div>
    <div className="flex space-x-1">
      <button
        className="border-none p-0 appearance-none"
        onClick={onEditTaskClick}
      >
        <svg
          fill="none"
          height="1em"
          stroke="currentColor"
          viewBox="0 0 24 24"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
          />
        </svg>
      </button>
      <button
        className="border-none p-0 appearance-none"
        onClick={onDeleteTaskClick}
      >
        <svg
          fill="none"
          height="1em"
          stroke="currentColor"
          viewBox="0 0 24 24"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
          />
        </svg>
      </button>
    </div>
  </li>
);

export const TaskItem: VFC<Props> = ({
  id,
  onDeleteTaskClick,
  onEditTaskClick,
  title,
}) => {
  return (
    <PureTaskItem {...{ id, onDeleteTaskClick, onEditTaskClick, title }} />
  );
};

export type PureProps = Props;

export type Props = {
  id: number;
  onDeleteTaskClick: MouseEventHandler<HTMLButtonElement>;
  onEditTaskClick: MouseEventHandler<HTMLButtonElement>;
  title: string;
};

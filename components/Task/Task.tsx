import React, { FC } from 'react';

import { Props as TaskListProps, TaskList } from './TaskList/TaskList';

export const PureTask: FC<PureProps> = ({ tasks }) => (
  <TaskList {...{ tasks }} />
);

export const Task: FC<Props> = ({ tasks }) => {
  return <PureTask {...{ tasks }} />;
};

export type PureProps = Props;

export type Props = TaskListProps;

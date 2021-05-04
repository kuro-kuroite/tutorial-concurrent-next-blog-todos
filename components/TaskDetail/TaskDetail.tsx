import React, { FC } from 'react';

import { Props as TaskProps, Task } from './Task/Task';

export const PureTaskDetail: FC<PureProps> = ({ id, title }) => (
  <Task {...{ id, title }} />
);

export const TaskDetail: FC<Props> = ({ id, title }) => {
  return <PureTaskDetail {...{ id, title }} />;
};

export type PureProps = Props;

export type Props = TaskProps;

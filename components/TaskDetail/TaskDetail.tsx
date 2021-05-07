import { useRouter } from 'next/router';
import React, { FC } from 'react';
import useSWR from 'swr';

import { fetchTaskData } from '../../lib/tasks';
import { Props as TaskProps, Task } from './Task/Task';

export const PureTaskDetail: FC<PureProps> = ({ id, title }) => (
  <Task {...{ id, title }} />
);

export const TaskDetail: FC<Props> = () => {
  const { query } = useRouter();
  const queryId = query.id as string;
  const { data } = useSWR<PureProps>(
    ['task', queryId],
    () => fetchTaskData(queryId),
    {
      suspense: true,
    }
  );
  // HACK: Suspense を使用しているため
  const { id, title } = data as NonNullable<typeof data>;

  return <PureTaskDetail {...{ id, title }} />;
};

export type PureProps = TaskProps;

export type Props = Record<string, unknown>;

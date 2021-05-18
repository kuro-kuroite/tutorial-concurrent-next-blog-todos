import { NextPage } from 'next';
import React, { VFC } from 'react';

import { Layout } from '../../components/Layout/Layout';
import {
  Props as TaskDetailProps,
  TaskDetail,
} from '../../components/TaskDetail/TaskDetail';

const PureTaskDetailPage: VFC<PureProps> = () => (
  <Layout title="Task">
    <TaskDetail />
  </Layout>
);

const TaskDetailPage: NextPage<Props> = () => {
  return <PureTaskDetailPage />;
};

export default TaskDetailPage;

export type StaticProps = {
  task: TaskDetailProps;
};

export type PureProps = Props;

export type Props = Record<string, unknown>;

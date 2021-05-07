import { NextPage } from 'next';
import React, { VFC } from 'react';

import { Layout } from '../components/Layout/Layout';
import { Task } from '../components/Task/Task';

const PureTaskPage: VFC<PureProps> = () => (
  <Layout title="Task">
    <Task />
  </Layout>
);

const TaskPage: NextPage<Props> = () => {
  return <PureTaskPage />;
};

export default TaskPage;

export type PureProps = Props;

export type Props = Record<string, unknown>;

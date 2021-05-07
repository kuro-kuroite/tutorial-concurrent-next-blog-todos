import { NextPage } from 'next';
import React, { Suspense, VFC } from 'react';

import { ErrorBoundary } from '../../components/ErrorBoundary/ErrorBoundary';
import { Layout } from '../../components/Layout/Layout';
import {
  Props as TaskDetailProps,
  TaskDetail,
} from '../../components/TaskDetail/TaskDetail';

const PureTaskDetailPage: VFC<PureProps> = () => (
  <Layout title="Task">
    <ErrorBoundary fallback={<p>task を取得できませんでした。</p>}>
      <Suspense fallback={<p>task を取得中...</p>}>
        <TaskDetail />
      </Suspense>
    </ErrorBoundary>
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

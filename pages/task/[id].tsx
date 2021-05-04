import { GetServerSideProps, NextPage } from 'next';
import React, { VFC } from 'react';

import { Layout } from '../../components/Layout/Layout';
import {
  Props as TaskDetailProps,
  TaskDetail,
} from '../../components/TaskDetail/TaskDetail';
import { isLogin } from '../../lib/auth';
import { fetchTaskData } from '../../lib/tasks';
import { TaskParams } from '../../types/task';

const PureTaskDetailPage: VFC<PureProps> = ({ task: { id, title } }) => (
  <Layout title="Task">
    <TaskDetail {...{ id, title }} />
  </Layout>
);

const TaskDetailPage: NextPage<Props> = ({ task }) => {
  // TODO(tasks): loading, failure

  if (!task) {
    return <div>loading...</div>;
  }

  return <PureTaskDetailPage {...{ task }} />;
};

export default TaskDetailPage;

export type StaticProps = {
  task: TaskDetailProps;
};

export type PureProps = Props;

export type Props = StaticProps;

export const getServerSideProps: GetServerSideProps<
  StaticProps,
  TaskParams
> = async (ctx) => {
  // TODO: validate data using error
  const id = (ctx.params?.id as string) ?? '';
  const { data } = await fetchTaskData(id);
  const task = data.task;
  const redirect = isLogin(ctx)
    ? {}
    : {
        redirect: {
          destination: '/login/',
          permanent: false,
        },
      };

  return {
    ...redirect,
    props: { task },
  };
};

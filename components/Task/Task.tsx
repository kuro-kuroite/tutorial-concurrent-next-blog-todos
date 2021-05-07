import React, { FC, Suspense } from 'react';

import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
import { TaskList } from './TaskList/TaskList';

export const PureTask: FC<PureProps> = () => (
  <ErrorBoundary fallback={<p>task リストを取得できませんでした。</p>}>
    <Suspense fallback={<p>task リストを取得中...</p>}>
      <TaskList />
    </Suspense>
  </ErrorBoundary>
);

export const Task: FC<Props> = () => {
  return <PureTask />;
};

export type PureProps = Props;

export type Props = Record<string, unknown>;

import React, { Suspense, VFC } from 'react';

import { AuthErrorBoundary } from '../ErrorBoundary/AuthErrorBoundary';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
import { TaskList } from './TaskList/TaskList';

export const PureTask: VFC<PureProps> = () => (
  <ErrorBoundary fallback={<p>task リストを取得できませんでした。</p>}>
    <AuthErrorBoundary fallback={<p>ログインが必要です。</p>}>
      <Suspense fallback={<p>task リストを取得中...</p>}>
        <TaskList />
      </Suspense>
    </AuthErrorBoundary>
  </ErrorBoundary>
);

export const Task: VFC<Props> = () => {
  return <PureTask />;
};

export type PureProps = Props;

export type Props = Record<string, unknown>;

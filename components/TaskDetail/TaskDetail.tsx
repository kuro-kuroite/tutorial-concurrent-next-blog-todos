import React, { Suspense, VFC } from 'react';

import { AuthErrorBoundary } from '../ErrorBoundary/AuthErrorBoundary/AuthErrorBoundary';
import { AuthErrorFallback } from '../ErrorBoundary/AuthErrorBoundary/AuthErrorFallback';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
import { Task } from './Task/Task';

export const PureTaskDetail: VFC<PureProps> = () => (
  <ErrorBoundary fallback={<p>task を取得できませんでした。</p>}>
    <AuthErrorBoundary fallback={<AuthErrorFallback />}>
      <Suspense fallback={<p>task を取得中...</p>}>
        <Task />
      </Suspense>
    </AuthErrorBoundary>
  </ErrorBoundary>
);

export const TaskDetail: VFC<Props> = () => {
  return <PureTaskDetail />;
};

export type PureProps = Props;

export type Props = Record<string, unknown>;

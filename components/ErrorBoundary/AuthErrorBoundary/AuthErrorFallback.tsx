import Link from 'next/link';
import React, { VFC } from 'react';

export const PureAuthErrorFallback: VFC<PureProps> = () => (
  <div className="flex flex-col items-center space-y-4">
    <p>ログインが必要です。</p>
    <Link href="/login">Login</Link>
  </div>
);

export const AuthErrorFallback: VFC<Props> = () => {
  return <PureAuthErrorFallback />;
};

export type PureProps = Props;

export type Props = Record<string, unknown>;

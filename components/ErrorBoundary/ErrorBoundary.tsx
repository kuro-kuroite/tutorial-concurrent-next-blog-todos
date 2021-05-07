import React, { Component, PropsWithChildren, ReactNode } from 'react';

export class ErrorBoundary extends Component<Props, State> {
  state = { error: null, hasError: false };
  static getDerivedStateFromError(error: Error): State {
    return {
      error,
      hasError: true,
    };
  }
  render(): ReactNode {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export type Props = PropsWithChildren<{
  fallback: ReactNode;
}>;

export type State = { error: null | Error; hasError: boolean };

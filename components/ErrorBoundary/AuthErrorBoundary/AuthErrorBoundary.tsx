import { ErrorBoundary, State } from '../ErrorBoundary';

export class AuthErrorBoundary extends ErrorBoundary {
  state = { error: null, hasError: false };
  static getDerivedStateFromError(error: Error): State {
    const conditions = ['No user'];
    // HACK: type mismatch
    const message = (error as unknown) as string;

    if (conditions.includes(message)) {
      return super.getDerivedStateFromError(new Error(message));
    }

    return {
      error: null,
      hasError: false,
    };
  }
}

import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { isLogin } from '../../lib/auth';

export const useRequireLogin = (): void => {
  const { events, push } = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      const allowStartWithUrls = ['/blog/'];

      if (
        allowStartWithUrls.some((allowStartWithUrl) =>
          url.startsWith(allowStartWithUrl)
        )
      ) {
        return true;
      }

      const allowUrls = ['/', '/login', '/signup', '/main', '/blog', '/_error'];

      if (allowUrls.includes(url)) {
        return true;
      }

      if (isLogin()) {
        return true;
      }

      void push('/login/');

      return false;
    };

    events.on('routeChangeStart', handleRouteChange);

    return () => {
      events.off('routeChangeStart', handleRouteChange);
    };
  }, [events, push]);
};

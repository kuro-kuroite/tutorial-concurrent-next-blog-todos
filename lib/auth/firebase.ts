import { NextApiRequest, NextPageContext } from 'next';
import { destroyCookie, parseCookies, setCookie } from 'nookies';

import { useFirebaseContext } from '../firebase/firebase';
import { Props } from './AuthProvider';

export const useAuth: Props['useAuth'] = () => {
  const { auth } = useFirebaseContext();

  const signUp = async (email: string, password: string): Promise<void> => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      alert(error);
    }
  };

  const login = async (email: string, password: string): Promise<void> => {
    try {
      const user = await auth.signInWithEmailAndPassword(email, password);

      setCookie(
        null,
        'access_token',
        (await user.user?.getIdToken()) ?? user.user?.refreshToken ?? '',
        {
          maxAge: 30 * 24 * 60 * 60,
        }
      );
    } catch (error) {
      alert(error);
    }
  };

  const logout = async (): Promise<void> => {
    try {
      await auth.signOut();
      setCookie(null, 'access_token', '', { maxAge: 0 });
      destroyCookie(null, 'access_token');
    } catch (error) {
      alert(error);
    }
  };

  const isLogin: (
    ctx?:
      | Pick<NextPageContext, 'req'>
      | {
          req: NextApiRequest;
        }
  ) => boolean = (ctx) => {
    const cookie = parseCookies(ctx);

    console.log(cookie);

    return !!cookie['access_token'];
  };

  return {
    isLogin,
    login,
    logout,
    signUp,
  };
};

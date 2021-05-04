import { NextApiRequest, NextPageContext } from 'next';
import { destroyCookie, parseCookies, setCookie } from 'nookies';

import { auth } from './firebase/firebase-client';

export const signUp = async (
  email: string,
  password: string
): Promise<void> => {
  try {
    await auth.createUserWithEmailAndPassword(email, password);
  } catch (error) {
    alert(error);
  }
};

export const login = async (email: string, password: string): Promise<void> => {
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

export const logout = async (): Promise<void> => {
  try {
    await auth.signOut();
    destroyCookie(null, 'access_token');
  } catch (error) {
    alert(error);
  }
};

export const isLogin: (
  ctx?:
    | Pick<NextPageContext, 'req'>
    | {
        req: NextApiRequest;
      }
) => boolean = (ctx) => {
  const cookie = parseCookies(ctx);

  return !!cookie['access_token'];
};

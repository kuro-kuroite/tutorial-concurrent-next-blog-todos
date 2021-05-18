import React, { createContext, FC } from 'react';

export const AuthContext = createContext<Props>({} as Props);

export const AuthProvider: FC<Props> = ({ children, useAuth }) => (
  <AuthContext.Provider value={{ useAuth }}>{children}</AuthContext.Provider>
);

export type Props = {
  useAuth: () => {
    isLogin: () => boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    signUp: (email: string, password: string) => Promise<void>;
  };
};

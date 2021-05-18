import { useContext } from 'react';

import { AuthContext, Props } from './AuthProvider';

export const useAuth: Props['useAuth'] = () =>
  useContext(AuthContext).useAuth();

export const useAuthContext = (): Props => useContext(AuthContext);

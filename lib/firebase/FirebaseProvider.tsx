import type firebase from 'firebase/app';
import React, { createContext, FC } from 'react';

export const FirebaseContext = createContext<Props>({} as Props);

export const FirebaseProvider: FC<Props> = ({
  auth,
  children,
  db,
  setTimeStamp,
}) => (
  <FirebaseContext.Provider value={{ auth, db, setTimeStamp }}>
    {children}
  </FirebaseContext.Provider>
);

export type Props = {
  auth: firebase.auth.Auth;
  db: firebase.firestore.Firestore;
  setTimeStamp: () => firebase.firestore.FieldValue;
};

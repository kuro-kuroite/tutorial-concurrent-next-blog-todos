import 'firebase/auth';
import 'firebase/firestore';

import firebase from 'firebase/app';
import { useContext } from 'react';

import { FirebaseContext, Props } from './FirebaseProvider';

export const useFirebase = (): Props => {
  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  };
  // FYI: https://github.com/vercel/next.js/issues/1999#issuecomment-326805233
  const app = firebase.apps.length
    ? firebase.app()
    : firebase.initializeApp(firebaseConfig);
  // FYI: https://stackoverflow.com/a/62110869
  const db = app.firestore();
  const auth = app.auth();
  const setTimeStamp = () => firebase.firestore.FieldValue.serverTimestamp();

  return { auth, db, setTimeStamp };
};

export const useFirebaseContext = (): Props => useContext(FirebaseContext);

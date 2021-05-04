// This import loads the firebase namespace.
// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/firestore';

import firebase from 'firebase/app';

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
export const db = app.firestore();

export const auth = app.auth();

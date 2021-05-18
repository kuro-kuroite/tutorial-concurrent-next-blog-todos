import '../styles/tailwind.css';
import '../styles/reset.css';
import '../styles/a11y.css';
import '../styles/base.css';
import '../components/Layout/Layout.css';

import { AppProps } from 'next/app';
import React, { useEffect, VFC } from 'react';

import { AuthProvider } from '../lib/auth/AuthProvider';
import { useAuth } from '../lib/auth/firebase';
import { useFirebase } from '../lib/firebase/firebase';
import { FirebaseProvider } from '../lib/firebase/FirebaseProvider';
import { useTask } from '../lib/tasks/firebase';
import { TaskProvider } from '../lib/tasks/TaskProvider';

const App: VFC<AppProps> = ({ Component, pageProps }) => {
  const { auth, db, setTimeStamp } = useFirebase();

  useEffect(() => {
    const unSub = auth.onAuthStateChanged((user) => {
      if (!user) {
        // cache.clear();
      }

      return;
    });

    return () => unSub();
  }, [auth]);

  return (
    <FirebaseProvider {...{ auth, db, setTimeStamp }}>
      <AuthProvider {...{ useAuth }}>
        <TaskProvider {...{ useTask }}>
          <Component {...pageProps} />
        </TaskProvider>
      </AuthProvider>
    </FirebaseProvider>
  );
};

export default App;

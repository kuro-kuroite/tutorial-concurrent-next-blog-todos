import { NextPage } from 'next';
import React from 'react';

import { Layout } from '../components/Layout/Layout';

const SignUpPage: NextPage = () => (
  <Layout title="Login">
    <h1 className="text-white">
      Hello Next.js
      <span aria-label="hello" role="img">
        👋
      </span>
    </h1>
  </Layout>
);

export default SignUpPage;

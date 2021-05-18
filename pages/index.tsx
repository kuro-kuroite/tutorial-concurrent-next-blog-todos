import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

import { Layout } from '../components/Layout/Layout';

const SignUpPage: NextPage = () => (
  <Layout title="Login">
    <h1 className="text-white">
      Hello Next.js
      <span aria-label="hello" role="img">
        👋
      </span>
      <Link href="/task">task</Link>
    </h1>
  </Layout>
);

export default SignUpPage;

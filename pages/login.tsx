import { NextPage } from 'next';
import React from 'react';

import { Auth } from '../components/Auth/Auth';
import { Layout } from '../components/Layout/Layout';

const SignUpPage: NextPage = () => (
  <Layout title="Login">
    <Auth />
  </Layout>
);

export default SignUpPage;

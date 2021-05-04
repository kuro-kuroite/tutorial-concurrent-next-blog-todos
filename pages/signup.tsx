import { NextPage } from 'next';
import React, { VFC } from 'react';

import { SignUp } from '../components/Auth/SignUp';
import { Layout } from '../components/Layout/Layout';

export const PureSignUpPage: VFC<PureProps> = () => (
  <Layout title="SignUp">
    <SignUp />
  </Layout>
);

export const SignUpPage: NextPage<Props> = () => {
  return <PureSignUpPage />;
};

export default SignUpPage;

export type PureProps = Props;

export type Props = Record<string, unknown>;

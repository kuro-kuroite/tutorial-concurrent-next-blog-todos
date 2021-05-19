import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { MouseEventHandler, VFC } from 'react';

import { Layout } from '../components/Layout/Layout';
import { useAuth } from '../lib/auth/auth';

export const PureMainPage: VFC<PureProps> = ({ onLogoutClick }) => (
  <Layout title="Main">
    <div className="mb-10 flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-16">
      <Link href="/blog/">
        <a className="block bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-12 rounded">
          Visit Blog by SSG + ISR
        </a>
      </Link>
      <Link href="/task/">
        <a className="block bg-gray-500 hover:bg-gray-600 text-white px-4 py-12 rounded">
          Visit Task by CSR + Auth
        </a>
      </Link>
    </div>
    <button className="w-6 h-6 mt-10 border-none p-0 appearance-none">
      <svg
        fill="none"
        onClick={onLogoutClick}
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </svg>
    </button>
  </Layout>
);

export const MainPage: NextPage<Props> = () => {
  const router = useRouter();
  const { logout } = useAuth();

  const handleLogoutClick: PureProps['onLogoutClick'] = async (event) => {
    event.preventDefault();

    // TODO: Context
    // if (!isLogin) {
    //   return;
    // }

    await logout();
    await router.push('/');
    router.reload();

    return;
  };

  return (
    <PureMainPage
      {...{
        onLogoutClick: handleLogoutClick,
      }}
    />
  );
};

export default MainPage;

export type PureProps = {
  onLogoutClick: MouseEventHandler;
};

export type Props = Record<string, unknown>;

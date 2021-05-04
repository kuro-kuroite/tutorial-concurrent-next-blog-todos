import Head from 'next/head';
import Link from 'next/link';
import React, { FC } from 'react';

export const PureLayout: FC<PureProps> = ({ children, title }) => (
  <div
    className="grid min-h-screen text-gray-600 text-sm font-mono bg-gray-800"
    style={{
      gridTemplateColumns: '100%',
      gridTemplateRows: 'auto 1fr auto',
    }}
  >
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta content="initial-scale=1.0, width=device-width" name="viewport" />
      <link href="/logo.svg" rel="icon" />
    </Head>
    <header>
      <nav className="h-14 bg-gray-800 w-min-screen">
        <ul className="flex items-center h-full space-x-4 px-4">
          {[
            { slug: '/', title: 'Home' },
            { slug: '/main/', title: 'Main' },
            { slug: '/login/', title: 'Login' },
          ].map(({ slug, title }) => (
            <li key={title}>
              <Link href={slug}>
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded cursor-pointer hover:text-gray-300 hover:no-underline">
                  {title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
    <main className="px-2 py-0 flex flex-col justify-center items-center">
      {children}
    </main>
    <footer className="w-full h-12 flex justify-center items-center border-solid border-0 border-t border-gray-200">
      <a
        className="flex items-center cursor-pointer text-blue-500"
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        rel="noopener noreferrer"
        target="_blank"
      >
        Powered by{' '}
        <img alt="Vercel Logo" className="h-4 ml-2" src="/vercel.svg" />
      </a>
    </footer>
  </div>
);

export const Layout: FC<Props> = ({ children, title }) => {
  return <PureLayout {...{ children, title }} />;
};

export type PureProps = Props;

export type Props = {
  title: string;
};

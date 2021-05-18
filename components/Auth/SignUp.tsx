import Link from 'next/link';
import { useRouter } from 'next/router';
import React, {
  ChangeEventHandler,
  FormEventHandler,
  useState,
  VFC,
} from 'react';

import { useAuth } from '../../lib/auth/auth';

export const PureSignUp: VFC<PureProps> = ({
  email,
  onEmailChange,
  onLoginSubmit,
  onPasswordChange,
  password,
}) => (
  <div className="max-w-md w-full space-y-8">
    <div className="flex flex-col justify-center">
      <img
        alt="Workflow"
        className="mx-auto h-12 w-auto"
        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
      />
      <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
        Sign up your account
      </h2>
    </div>
    <form className="mt-8 space-y-6" onSubmit={onLoginSubmit}>
      <input defaultValue="true" name="remember" type="hidden" />
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label className="sr-only" htmlFor="email">
            E-mail
          </label>
          <input
            autoComplete="email"
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            id="email"
            name="email"
            onChange={onEmailChange}
            placeholder="E-mail"
            required={true}
            type="email"
            value={email}
          />
        </div>
        <div>
          <label className="sr-only" htmlFor="password">
            Password
          </label>
          <input
            autoComplete="current-password"
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            id="password"
            name="password"
            onChange={onPasswordChange}
            placeholder="Password"
            required={true}
            type="password"
            value={password}
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="text-sm">
          <Link href="/login/">
            <span className="cursor-pointer font-medium text-white">
              Login?
            </span>
          </Link>
        </div>
      </div>
      <div>
        <button
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          type="submit"
        >
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <svg
              aria-hidden="true"
              className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                fillRule="evenodd"
              />
            </svg>
          </span>
          Sign up
        </button>
      </div>
    </form>
  </div>
);

export const SignUp: VFC<Props> = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isLogin, signUp } = useAuth();

  const handleLoginSubmit: PureProps['onLoginSubmit'] = async (event) => {
    event.preventDefault();

    if (isLogin()) {
      return;
    }

    await signUp(email, password);
    setEmail('');
    setPassword('');
    await router.push('/main/');

    return;
  };

  const handleEmailChange: PureProps['onEmailChange'] = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange: PureProps['onPasswordChange'] = (event) => {
    setPassword(event.target.value);
  };

  return (
    <PureSignUp
      {...{
        email,
        onEmailChange: handleEmailChange,
        onLoginSubmit: handleLoginSubmit,
        onPasswordChange: handlePasswordChange,
        password,
      }}
    />
  );
};

export type Props = Record<string, unknown>;

export type PureProps = {
  email: string;
  onEmailChange: ChangeEventHandler<HTMLInputElement>;
  onLoginSubmit: FormEventHandler<HTMLFormElement>;
  onPasswordChange: ChangeEventHandler<HTMLInputElement>;
  password: string;
};

import Image from 'next/image';
import React, { VFC } from 'react';

import { FacebookIcon } from './assets/FacebookIcon';
import { GitHubIcon } from './assets/GitHubIcon';
import { TwitterIcon } from './assets/TwitterIcon';

export const PureContact: VFC<PureProps> = () => (
  <div className="bg-white text-center shadow-xl p-8 w-80 rounded">
    <div className="mt-4">
      <p className="font-bold">Contact info</p>
    </div>
    <div className="flex justify-center mt-4">
      <Image
        alt="Avatar"
        className="rounded-full"
        height={60}
        placeholder="blur"
        src="/avatar.jpg"
        width={60}
      />
    </div>
    <div className="mt-4">
      <p className="font-bold">Address</p>
      <p className="text-xs mt-2 text-gray-600">city A</p>
      <p className="font-bold mt-3">E-mail</p>
      <p className="text-xs mt-2 text-gray-600">abc@gmail.com</p>
      <p className="font-bold mt-3">Phone</p>
      <p className="text-xs mt-2 text-gray-600">000-123-456</p>
    </div>
    <div className="mt-6 flex justify-around">
      <div>
        <a
          href="https://nerdcave.com/tailwind-cheat-sheet"
          rel="noopener noreferrer"
          target="_blank"
        >
          <TwitterIcon className="w-6 h-6 mr-3 text-blue-500" />
        </a>
      </div>
      <div>
        <a
          href="https://nerdcave.com/tailwind-cheat-sheet"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FacebookIcon className="w-6 h-6 mr-3 text-blue-700" />
        </a>
      </div>
      <div>
        <a
          href="https://nerdcave.com/tailwind-cheat-sheet"
          rel="noopener noreferrer"
          target="_blank"
        >
          <GitHubIcon className="w-6 h-6 mr-3 text-gray-500" />
        </a>
      </div>
    </div>
  </div>
);

export const Contact: VFC<Props> = () => {
  return <PureContact />;
};

export type PureProps = Props;

export type Props = Record<string, unknown>;

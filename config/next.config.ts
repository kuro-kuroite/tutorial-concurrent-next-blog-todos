import { NextConfig } from 'next/dist/next-server/server/config';

const config: NextConfig = {
  experimental: {
    reactMode: 'concurrent',
    // NOTE: 初期値
    reactRoot: parseInt(process.env?.NEXT_PRIVATE_REACT_ROOT ?? '0') > 0,
    turboMode: false,
  },
  // NOTE: 初期値
  future: {
    excludeDefaultMomentLocales: false,
    strictPostcssConfiguration: false,
    webpack5: Number(process.env.NEXT_PRIVATE_TEST_WEBPACK5_MODE) > 0,
  },
  reactStrictMode: true,
};

export default config;

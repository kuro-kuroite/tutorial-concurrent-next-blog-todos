import { NextConfig } from 'next/dist/next-server/server/config';

const config: NextConfig = {
  experimental: {
    reactMode: 'concurrent',
  },
  future: {
    excludeDefaultMomentLocales: false,
    strictPostcssConfiguration: false,
    webpack5: Number(process.env.NEXT_PRIVATE_TEST_WEBPACK5_MODE) > 0,
  },
  reactStrictMode: true,
};

export default config;

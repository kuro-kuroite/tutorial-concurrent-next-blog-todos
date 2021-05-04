const config: Config = {
  plugins: {
    tailwindcss: {},
    // eslint-disable-next-line sort-keys-fix/sort-keys-fix
    'postcss-preset-env': {
      features: {
        'nesting-rules': true,
      },
    },
    'postcss-scrollbar': {},
  },
};

type Config = {
  plugins: Record<string, unknown>;
};

export default config;

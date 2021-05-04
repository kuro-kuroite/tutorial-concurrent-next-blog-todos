import { mergeDeepRight } from 'ramda';

import { colors } from './colors.config';

const tailwindConfig = {
  corePlugins: {
    preflight: false,
  },
  darkMode: false,
  mode: 'jit',
  plugins: [require('@tailwindcss/forms')],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: mergeDeepRight(
        {
          primary: colors.orange,
        },
        colors
      ),
      outline: {
        none: ['2px solid transparent', '0px'],
        // HACK: overflow auto で隠れてしまう要素でも outline を表示するため。
        primary: [`1px solid ${colors.orange.DEFAULT}`, '-1px'],
      },
    },
    fontFamily: {
      body: [
        '"Helvetica Neue"',
        'Arial',
        '"Hiragino Kaku Gothic ProN"',
        '"Hiragino Sans"',
        'Meiryo',
        'sans-serif',
      ],
    },
    fontSize: {
      // HACK: base.css の line-height で固定するため。
      '2xl': ['1.5rem', { lineHeight: undefined }],
      '3xl': ['1.875rem', { lineHeight: undefined }],
      '4xl': ['2.25rem', { lineHeight: undefined }],
      '5xl': ['3rem', { lineHeight: undefined }],
      '6xl': ['3.75rem', { lineHeight: undefined }],
      '7xl': ['4.5rem', { lineHeight: undefined }],
      '8xl': ['6rem', { lineHeight: undefined }],
      '9xl': ['8rem', { lineHeight: undefined }],
      base: ['1rem', { lineHeight: undefined }],
      lg: ['1.125rem', { lineHeight: undefined }],
      sm: ['0.875rem', { lineHeight: undefined }],
      xl: ['1.25rem', { lineHeight: undefined }],
      xs: ['0.75rem', { lineHeight: undefined }],
    },
    opacity: {
      '0': '0',
      '100': '1',
      lg: '0.75',
      md: '0.45',
      sm: '0.2',
    },
    screens: {
      lg: '1024px',
      // NOTE: width of sm, which of iPhone 12 Pro Max is 428px
      md: '429px',
      xl: '1280px',
    },
  },
};

export default tailwindConfig;

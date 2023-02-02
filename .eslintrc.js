/** @format */

module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  rules: {
    indent: ['error', 2, {SwitchCase: 1}],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single', {avoidEscape: true}],
    semi: ['error', 'always'],
    'no-empty-function': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'max-len': ['error', {code: 80}],
    'padding-line-between-statements': [
      'error',
      {blankLine: 'always', prev: ['const', 'let', 'var'], next: '*'},
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
    ],
    'space-before-function-paren': [
      0,
      {
        anonymous: 'always',
        named: 'always',
        asyncArrow: 'always',
      },
    ],
    'arrow-spacing': ['error', {before: true, after: true}],
    'react-native/no-raw-text': 0,
    'react-native/no-inline-styles': 0,
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};

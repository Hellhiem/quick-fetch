module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'plugin:prettier/recommended', 'prettier'],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'error',
    'no-useless-catch': 'off',
  },
  env: {
    browser: true,
    node: true,
  },
};

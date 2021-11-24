module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    'jest/globals': true,
  },
  plugins: ['jest'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  // 'plugin:prettier/recommended'],
  rules: {
    'prefer-const': 'error',
    'react/react-in-jsx-scope': 'off',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
  },
}

module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    requireConfigFile: false,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
  ],
  plugins: [
    'react',
    'react-native',
  ],
  env: {
    browser: true,
    node: true,
    'react-native/react-native': true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // Add any specific rules or overrides here
  },
};


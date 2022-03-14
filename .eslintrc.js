module.exports = {
  root: true,
  plugins: [
    '@typescript-eslint',
    'react',
    'import',
    'react-hooks',
    'prettier'
  ],
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/no-empty-interface',
    "plugin:react-native/recommended",
    'prettier',
  ],
  parser: ['@typescript-eslint/parser', '@babel/eslint-parser'],
    parserOptions: {
      "sourceType": "module",
      "ecmaVersion": 2015
  },
  rules: {
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'no-console': 1, // Means warning
    'prettier/prettier': 2, // Means error
  },
  settings: {
    React: {
      version: "latest", // "detect" automatically picks the version you have installed.
    },
  };
}
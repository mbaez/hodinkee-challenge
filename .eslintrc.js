module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'arrow-body-style': 'off',
    'react/prop-types': 'off',
    'object-curly-newline': 'off',
    'react/jsx-uses-vars': 'warn',
    'react/jsx-one-expression-per-line': 'warn',
    'operator-linebreak': 'off',
    'comma-dangle': 'off',
    'no-unused-vars': 'warn',
    'react/jsx-props-no-spreading': 'warn',
    'jsx-a11y/label-has-associated-control': 'off',
  },
};

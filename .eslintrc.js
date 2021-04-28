module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb", "plugin:prettier/recommended"],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/prop-types": "off",
    "react/jsx-uses-vars": "warn",
    "no-unused-vars": "warn",
    "react/jsx-props-no-spreading": "warn",
    "jsx-a11y/label-has-associated-control": "off",
  },
};

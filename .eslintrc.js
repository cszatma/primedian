module.exports = {
  env: {
    node: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended'
  ],
  plugins: [
    "prettier"
  ],
  rules: {
    'no-console': 'off'
  }
};

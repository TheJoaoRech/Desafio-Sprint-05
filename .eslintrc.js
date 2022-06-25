module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    camelcase: 'off',
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    'no-await-in-loop': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'func-names': 'off',
    'no-console': 'off',
  },
};

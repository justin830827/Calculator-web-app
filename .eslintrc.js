module.exports = {
  extends: "airbnb-base",
  parserOptions: {
    ecmaVersion: 2017
  },
  parser: "babel-eslint",
  env: {
    es6: true
  },
  rules: {
    "linebreak-style": 0,
    "new-cap": 0,
    "no-unused-vars": 0,
    "no-extra-semi": 0,
    "max-len": 0,
    "no-shadow": [
      'error',
      {
        allow: ['done','error','cb','result','results'],
      }
    ],
    "no-nested-ternary": 0,
    "no-console": 0,
    "consistent-return": 0,
    "global-require": 0,
    "no-else-return": 0,
    "no-underscore-dangle": 0,
    "array-callback-return": 0,
  }
};
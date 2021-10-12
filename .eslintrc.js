module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  'extends': [
    'eslint:recommended'
  ],
  parserOptions: {
    'ecmaVersion': 2017
  },
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'space-before-function-paren': ['warn', 'always'],
    'comma-dangle': 'error'
  }
}

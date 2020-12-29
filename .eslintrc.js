module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  "ignorePatterns": ["src/oruga-preview/*"],
  parserOptions: {
    ecmaVersion: 2020
  },
  overrides: [
    {'files': ["src/**/*.js", "src/**/*.vue"]},
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}

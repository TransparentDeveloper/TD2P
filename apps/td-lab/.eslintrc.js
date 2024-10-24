module.exports = {
  root: true,
  extends: [
    '@repo/eslint-config/next.js',
    '@repo/eslint-config/prettier.js',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
}

/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['@repo/eslint-config/next.js', '@repo/eslint-config/prettier.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
}

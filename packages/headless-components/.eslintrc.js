/** @type {import("eslint").Linter.Config} */

module.exports = {
  extends: ["@repo/eslint-config/library.js"],
  parser: "@typescript-eslint/parser",
  ignorePatterns: ["./src/generated/**/*"],
  parserOptions: {
    project: true,
  },
  env: {
    jest: true,
  },
};

module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setupJest.ts"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/dist/"],
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/projects/playground/tsconfig.spec.json",
      stringifyContentPathRegex: "\\.html$",
    },
  },
};

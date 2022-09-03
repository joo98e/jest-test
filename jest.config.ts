export default {
  clearMocks: true,
  collectCoverage: false,
  coverageDirectory: "coverage",
  moduleDirectories: ["node_modules", "src"],
  verbose: true,
  moduleNameMapper: {
    "^@utils/(.*)$": "<rootDir>/src/utils/$1",
  },
};

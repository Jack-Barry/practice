module.exports = {
  bail: true,
  clearMocks: true,
  collectCoverageFrom: ["<rootDir>/src/*/**/*.(ts)", "!**/node_modules/**"],
  coverageDirectory: "coverage",
  globals: {
    "ts-jest": {
      tsConfig: "config/tsconfig.json"
    }
  },
  moduleFileExtensions: ["ts", "js"],
  rootDir: "./..",
  testEnvironment: "node",
  testMatch: ["**/*.+(spec).(ts)"],
  transform: {
    "^.+\\.(ts)$": "ts-jest"
  }
};

import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testMatch: ["**/__tests__/**.test.ts"],
  globalSetup: "<rootDir>/__tests__/utils/globalSetup.ts",
  globalTeardown: "<rootDir>/__tests__/utils/globalTeardown.ts",
  setupFilesAfterEnv: ["<rootDir>/__tests__/utils/setupFile.ts"],
  clearMocks: true,
  collectCoverageFrom: ["./src/**"],
  coverageDirectory: "coverage",
  coverageProvider: "v8",
};

export default config;

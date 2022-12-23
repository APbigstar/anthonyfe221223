/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy'
  },
  transformIgnorePatterns: ['\\.(css|scss|sass)$'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
};
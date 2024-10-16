/** @type {import('jest').Config} */
module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native-community|@react-native|@react-navigation)',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/__tests__/helpers'],
  moduleNameMapper: {
    '\\.d\\.ts$': '<rootDir>/mocks/emptyModule.ts',
  },
};

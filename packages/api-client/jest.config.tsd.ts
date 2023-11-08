/* eslint-disable */
export default {
  displayName: 'api-client',
  preset: '../../jest.preset.js',
  testEnvironment: 'node',
  runner: 'jest-runner-tsd',
  testMatch: ['**/test/types/*.spec-type.ts'],
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/packages/api-client',
};
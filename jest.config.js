module.exports = {

  bail: true,

  clearMocks: true,

  collectCoverage: true,

  coverageDirectory: '__tests__/integration',

  coverageProvider: 'v8',

  testEnvironment: 'node',

  testMatch: ['**/__tests__/**/*.test.js?(x)'],

};

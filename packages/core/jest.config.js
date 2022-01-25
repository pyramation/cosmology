module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '\\.[jt]sx?$': 'babel-jest'
  },
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    './src/setupTests.js'
  ]
};

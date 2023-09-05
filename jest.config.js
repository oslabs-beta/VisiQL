/** @returns {Promise<import('jest').Config>} */
module.exports = async () => {
  return {
    verbose: true,
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
          '<rootDir>/__mocks__/fileMock.js',
        '\\.(css|less|scss)$': 'identity-obj-proxy',
    },
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: [
      "<rootDir>/node_modules/",
      "<rootDir>/src/client/scss/",
      "<rootDir>/dist"
    ],
    setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
    preset: 'jest-puppeteer'
  };
};
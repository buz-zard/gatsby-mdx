module.exports = {
  setupFilesAfterEnv: ['<rootDir>/src/__tests__/__setup__.js'],
  snapshotSerializers: ['jest-serializer-html'],
  testRegex: 'src/.+\\.test\\.js$',
};

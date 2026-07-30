module.exports = {
  preset: 'react-native',
  testMatch: ['<rootDir>/src/**/*.test.{ts,tsx}'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@devraj-labs/vajra-ui-core)/)',
  ],
  // @devraj-labs/vajra-ui-core's package.json "exports" only declares "import"/"types"
  // conditions, no "require" — Jest's CJS resolver can't find an entry point without
  // this override. Fix belongs upstream in vajra-ui-core's package.json exports map.
  moduleNameMapper: {
    '^@devraj-labs/vajra-ui-core$':
      '<rootDir>/node_modules/@devraj-labs/vajra-ui-core/dist/index.js',
  },
};

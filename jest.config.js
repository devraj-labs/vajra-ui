module.exports = {
  preset: 'react-native',
  testMatch: ['<rootDir>/src/**/*.test.{ts,tsx}'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@devraj-labs/vajra-ui-core|@devraj-labs/vajra-ui-icons|lucide-react-native)/)',
  ],
  // @devraj-labs/vajra-ui-core's package.json "exports" only declares "import"/"types"
  // conditions, no "require" — Jest's CJS resolver can't find an entry point without
  // this override. Fix belongs upstream in vajra-ui-core's package.json exports map.
  //
  // lucide-react-native's "exports" lists a "react-native" condition ahead of
  // "require", which the RN jest preset's resolver picks first — pointing to its
  // ESM (.mjs) build even under require(). Map it to the CJS build directly.
  moduleNameMapper: {
    '^@devraj-labs/vajra-ui-core$':
      '<rootDir>/node_modules/@devraj-labs/vajra-ui-core/dist/index.js',
    '^lucide-react-native$':
      '<rootDir>/node_modules/lucide-react-native/dist/cjs/lucide-react-native.js',
  },
};

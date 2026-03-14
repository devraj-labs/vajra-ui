module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-native'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  rules: {
    // React
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',

    // No default exports — named exports only
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ExportDefaultDeclaration',
        message: 'Default exports are not allowed. Use named exports only.',
      },
    ],

    // No interfaces — use type only
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],

    // Blank lines between statements for readability
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'import', next: '*' },
      { blankLine: 'any', prev: 'import', next: 'import' },
      { blankLine: 'always', prev: '*', next: 'export' },
      { blankLine: 'any', prev: 'export', next: 'export' },
      { blankLine: 'always', prev: 'const', next: 'expression' },
      { blankLine: 'always', prev: 'expression', next: 'const' },
      { blankLine: 'always', prev: '*', next: 'return' },
    ],

    // Type names must start with T
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'typeAlias',
        format: ['PascalCase'],
        custom: { regex: '^T[A-Z]', match: true },
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added

- ESLint rule enforcing the layer boundary described in the README: `src/ui/components/**` can no longer import `@devraj-labs/vajra-ui-core` directly and must go through `src/ui/core`.

### Fixed

- `Button`'s barrel (`src/ui/components/button/index.ts`) re-exported `TButtonSize`/`TButtonVariant` from both `button-types` and `button-variants`, causing an `import/export` duplicate-export lint error. The barrel now re-exports those types only once, from `button-types`.

## [0.5.3]

Work-in-progress token-driven React Native component library layered on `@devraj-labs/vajra-ui-core`. Includes `VajraProvider`/`createVajraTheme` theming, token-aware `core` primitives, and opinionated `components` (`Button`, `Badge`, `Card`, `Input`, `TabBar`, and others). First stable release targeted for June 2026.

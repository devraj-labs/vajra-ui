# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added

- ESLint rule enforcing the layer boundary described in the README: `src/ui/components/**` can no longer import `@devraj-labs/vajra-ui-core` directly and must go through `src/ui/core`.

### Fixed

- `Button`'s barrel (`src/ui/components/button/index.ts`) re-exported `TButtonSize`/`TButtonVariant` from both `button-types` and `button-variants`, causing an `import/export` duplicate-export lint error. The barrel now re-exports those types only once, from `button-types`.

## [0.5.3] - 2026-05-06

### Fixed

- `Text`: iOS requires `fontStyle: 'italic'` passed through even when a named italic font file is resolved; Android must have it suppressed in that case or the OS applies synthetic skew on top of the italic font file, breaking rendering. Platform-branched in `src/ui/core/text/text.tsx`.

## [0.5.2] - 2026-05-06

### Fixed

- `Text`: always pass `fontStyle` through to the underlying core text component for iOS italic rendering (superseded by the platform-branched fix in 0.5.3).

## [0.5.1] - 2026-05-06

### Added

- `Text`: `fontStyle` prop with named italic font file resolution — when a font has a registered italic PostScript variant (e.g. `Newsreader9pt-Italic`), it's resolved and used instead of relying on synthetic italic.

## [0.5.0] - 2026-04-28

### Added

- `IVajraCustomColors` module-augmentation interface so consumers can add or override color tokens with full type safety.
- `IVajraFontSizeTokens` augmentation interface and a new `f-2.5` (18px) font size token.
- `fontSizes`/`lineHeights` moved into the theme object, with custom font size tokens supported via `IVajraFontSizeTokens` and `createVajraTheme`.

### Changed

- `docs/theming.md` rewritten to accurately document the "Bring Your Own Theme" (BYOT) model and all augmentation interfaces.

## [0.4.0] - 2026-04-11

### Added

- `opacity` prop on `Box`.

## [0.3.4] - 2026-04-11

### Added

- `opacity` prop on `Box` (see 0.4.0 — tag cut same day, no functional delta).

## [0.3.3] - 2026-04-11

### Added

- Rounded tokens `r-5` through `r-10`, plus `overflow`/`position` props on `Box`, and an `IVajraRoundedTokens` augmentation interface.
- `IVajraSpacingTokens` and `IVajraFontVariants` augmentation interfaces, and typography overrides in `createVajraTheme`.
- `fontSize` prop on `Text` for finer-grained sizing control.

## [0.3.0] - 2026-04-11

### Fixed

- Variant resolution bug in `Button`.

### Changed

- Icon-related prop changes across components for maximum compatibility with consumer apps.

## [0.2.1] - 2026-04-09

### Changed

- Internal path/config change (no consumer-facing API change).

## [0.2.0] - 2026-04-09

### Added

- `release` script (`build` + `npm publish --access public`).

## [0.1.0] - 2026-04-09

Initial tagged release. Project scaffolding, `CODING_GUIDELINES.md`, and README.

---

### Note on the `v1.0.0` tag

A `v1.0.0` git tag exists in history dated 2026-04-02, seven days *before* `v0.1.0` — it was an early, premature version bump made before real semver progression started and was reset back down almost immediately (`chore: Reset package version`). It does not represent a stable 1.0 release and predates nearly all of the current feature set (theming augmentation interfaces, most components, italic font handling, layer-boundary enforcement). The next release to genuinely earn `1.0.0` will be the one described in the project roadmap as "Breadth & Reach," once test coverage, CI, and a broader component surface are in place. The tag itself is left in git history rather than deleted, since it's a real point-in-time artifact — this note exists so it isn't mistaken for a real 1.0 release.

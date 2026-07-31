# Changelog

All notable changes to this project will be documented in this file.

## [1.0.0] - 2026-07-31

First stable release. Two phases of work: hardening the foundation (testing, CI, architecture) so a breadth push could ship on solid ground, then the breadth push itself — 15 new components and a full documentation site with live, in-browser previews of every component.

### Added — Foundation & Trust

- ESLint rule enforcing the layer boundary described in the README: `src/ui/components/**` can no longer import `@devraj-labs/vajra-ui-core` directly and must go through `src/ui/core`.
- Two more ESLint layer-boundary rules: `src/ui/core/**` can no longer import from `src/ui/components/**` (prevents layer inversion), and nothing outside `src/ui/vajra-theme/**` may import `src/theme/**` directly (it's internal plumbing — use `useVajraTheme`/`VajraProvider` instead).
- Jest + React Native Testing Library at the root package — the library itself had zero test coverage before this release.
- CI (`.github/workflows/ci.yml`): typecheck/lint/test/build the library on every PR, a typecheck of `examples/app` against the local package to catch breaking API changes, and a verification that the built `dist/` output is actually importable the way a real consumer would (`scripts/verify-dist.sh` — packs the tarball, installs it fresh, typechecks a real import against it).
- Documented the `src/theme` vs `src/ui/vajra-theme` relationship, a step-by-step component authoring scaffold (simple and compositional), and the optional-peer-dependency pattern for motion-enhanced components in `CODING_GUIDELINES.md`.

### Added — Breadth & Reach

Fifteen new components, closing the gap with other RN component libraries on real-app-screen coverage:

- **Modal** — built on RN's native `Modal` for correct Android back-button/overlay behavior, token-driven backdrop and content.
- **Sheet** — bottom sheet composing `Modal`, drag-to-dismiss via `PanResponder`/`Animated` (no reanimated/gesture-handler dependency needed).
- **Toast** — provider + imperative `useToast().show()` API, queued with auto-dismiss, five feedback variants.
- **Select** — trigger styled like `Input`, options presented in a `Sheet`.
- **List** — thin token-aware `FlatList` wrapper with a default separator and empty-state slot.
- **Skeleton** — pulsing placeholder box.
- **Alert** — inline (non-toast) feedback banner, same five variants as Toast with subtler styling.
- **Accordion** — `Root`/`Item` composition, animated height, single or multi-open.
- **Menu** — action sheet built on `Sheet`, destructive/disabled action states.
- **Tabs** — `Root`/`List`/`Content` composition with real content-switching, distinct from the existing `TabBar` (which is visual-only).
- **Chip** — interactive selectable/removable pill, distinct from the static `Badge`.
- **ProgressBar** — animated 0–1 fill with `accessibilityValue`.
- **Slider** — drag-to-adjust via `PanResponder`, min/max/step.
- **Stepper** — increment/decrement numeric input.
- **Tooltip** — tap-to-toggle (mobile has no hover), positioned relative to its own wrapper.

### Added — Documentation

- Full component reference site (`website/`) with **live, in-browser previews** of every component (all 11 core primitives, all 29 opinionated components) rendered via a hand-rolled `react-native-web` webpack integration — not just static code snippets.
- Real branding, intro/quick-start page, and the existing theming and italic-fonts guides brought in as proper docs pages.
- CI now builds the docs site on every PR.

### Fixed

- `Button`'s barrel (`src/ui/components/button/index.ts`) re-exported `TButtonSize`/`TButtonVariant` from both `button-types` and `button-variants`, causing an `import/export` duplicate-export lint error. The barrel now re-exports those types only once, from `button-types`.
- `check-file/filename-naming-convention` was rejecting every `*.test.tsx` file as invalid kebab-case (it read `.test` as part of the name to validate) — fixed with `ignoreMiddleExtensions: true`.
- `IconSwitch` had no `testID` pass-through, forcing a brittle multi-level DOM-traversal workaround in its test — added the prop and simplified the test.

### Removed

- Deleted the stray, empty top-level `src/core/` directory, a leftover from when headless primitives were extracted into the separate `@devraj-labs/vajra-ui-core` package.

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

### Note on the original `v1.0.0` tag

An earlier `v1.0.0` git tag existed dated 2026-04-02, seven days *before* `v0.1.0` — an early, premature version bump made before real semver progression started and reset back down almost immediately (`chore: Reset package version`). It never represented a stable 1.0 release and predated nearly all of the current feature set. That tag was local-only (never pushed to origin) and has been removed and replaced by the real `v1.0.0` tag, which points at the [1.0.0] release described above.

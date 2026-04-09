# Vajra UI — Coding Guidelines

## Naming Conventions

### Types
All TypeScript `type` declarations must be prefixed with `T`. **No `interface` declarations anywhere in the project — use `type` only.**

```ts
// correct
type TButtonVariant = 'solid' | 'outline' | 'ghost';
type TBoxProps = { ... };

// wrong
type ButtonVariant = 'solid' | 'outline' | 'ghost';
interface BoxProps { ... }   // interfaces are banned
```

---

## Exports

**Named exports only. No default exports.**

```ts
// correct
export const Box = memo(BoxComponent);
export type { TBoxProps };

// wrong
export default Box;
```

This applies to components, hooks, utilities, constants, and types.

---

## Folder Structure

Every component lives in its own folder. The folder name uses kebab-case and matches the component name.

```
foobar/
├── foobar.tsx               # UI of the component
├── foobar-types.ts          # All types for this component
├── foobar-constants.ts      # Constants scoped to this component
├── foobar-variants.ts       # Variant definitions (components only, not core primitives)
├── use-foobar.ts            # Custom hook if the component has non-trivial logic
├── components/              # Sub-components (only if the component is compositional)
│   ├── foobar-header/
│   │   ├── foobar-header.tsx
│   │   ├── foobar-header-types.ts
│   │   └── index.ts
│   └── foobar-footer/
│       ├── foobar-footer.tsx
│       ├── foobar-footer-types.ts
│       └── index.ts
└── index.ts                 # Barrel — re-exports everything consumers need
```

When sub-components exist, they are attached as static properties inside `foobar.tsx` itself. `index.ts` stays a plain barrel.

```tsx
// foobar/foobar.tsx
import { FoobarHeader } from './components/foobar-header';
import { FoobarFooter } from './components/foobar-footer';

export const Foobar = {
  Header: FoobarHeader,
  Footer: FoobarFooter,
};
```

```ts
// foobar/index.ts — plain barrel, no composition logic
export * from './foobar';
export * from './foobar-types';
```

```tsx
// usage
<Foobar.Header />
<Foobar.Footer />
```

### Rules per file

| File | Purpose |
|------|---------|
| `foobar.tsx` | JSX only. No business logic. Uses props from `foobar-types.ts`. |
| `foobar-types.ts` | All `type` declarations. No runtime code. |
| `foobar-constants.ts` | Constant values used by the component (e.g. default sizes, maps). |
| `foobar-variants.ts` | Variant style maps or config. Present for components, not core primitives. |
| `use-foobar.ts` | Custom hook. Only add when the component has logic that cannot live in the component itself. |
| `index.ts` | Re-exports with `export * from`. Do not add logic here. |

### index.ts pattern

```ts
// foobar/index.ts
export * from './foobar';
export * from './foobar-types';
// only export variants/constants/hook if consumers need them
export * from './foobar-variants';
```

---

## File Naming

All file names use **kebab-case**.

```
button.tsx              correct
button-variants.ts      correct
use-button.ts           correct
Button.tsx              wrong
buttonVariants.ts       wrong
useButton.ts            wrong
```

---

## Component Pattern

```tsx
// foobar/foobar.tsx
import React, { memo } from 'react';
import { TFoobarProps } from './foobar-types';

export const Foobar = memo<TFoobarProps>(({ ... }) => { return ( ... ); });
```

- Component and memo export are written as a single inline declaration
- Props type lives in `foobar-types.ts`

---

## Token Usage in Components

Never use raw values for colors, spacing, radii, or font scales. Always reference tokens through the theme.

```tsx
// correct
<Box backgroundColor="primary" p="md" br="lg" />

// wrong
<View style={{ backgroundColor: '#0066FF', padding: 16, borderRadius: 8 }} />
```

Token prop types are key-based:
- `TColorToken` — `'primary' | 'surface' | 'error' | 'text' | ...`
- `TSpacingToken` — `'s-1' | 's-2' | 's-3' | 's-4' | 's-6' | 's-8' | ...`
- `TRoundedToken` — `'r-1' | 'r-2' | 'r-3' | 'r-4' | 'r-full' | ...`
- `TFontVariant` — `'heading' | 'subheading' | 'body' | 'bodySmall' | 'label' | 'caption' | 'button'`

---

## Layer Rules

| Layer | Location | Description |
|-------|----------|-------------|
| Core | `@vajra-ui/core` | Headless, unstyled. No theme context. No `useVajraTheme`. Raw primitives only. |
| UI Core | `src/ui/core/` | Token-aware wrappers around `@vajra-ui/core`. Use `useVajraTheme`. Only imports from `@vajra-ui/core`. |
| Components | `src/ui/components/` | Opinionated components with variants, constants, and optional hooks. Only imports from `src/ui/core` — never `@vajra-ui/core` directly. |
| Theme | `src/theme/` | Generic `ThemeProvider` + `useTheme`. No vajra-specific tokens. |
| Vajra Theme | `src/ui/vajra-theme/` | Default vajra tokens. `VajraProvider`, `useVajraTheme`, `defaultVajraTheme`. |

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
├── foobar.tsx            # UI of the component
├── foobar-types.ts       # All types for this component
├── foobar-constants.ts   # Constants scoped to this component
├── foobar-variants.ts    # Variant definitions (components only, not core primitives)
├── use-foobar.ts         # Custom hook if the component has non-trivial logic
└── index.ts              # Barrel — export * from each file as needed
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

const FoobarComponent: React.FC<TFoobarProps> = ({ ... }) => {
  return ( ... );
};

export const Foobar = memo(FoobarComponent);
```

- Internal implementation uses `FoobarComponent`
- The memoised version is the named export: `Foobar`
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
- `TColorToken` — `'primary' | 'surface' | 'error' | ...`
- `TSpacingToken` — `'xs' | 'sm' | 'md' | 'lg' | ...`
- `TRoundedToken` — `'sm' | 'md' | 'lg' | 'full' | ...`
- `TFontToken` — `'xs' | 'sm' | 'md' | 'lg' | ...` (compound: size + lineHeight + weight)

---

## Core vs Components

| Layer | Location | Description |
|-------|----------|-------------|
| Core primitives | `src/core/` | `Box`, `Row`, `Col` — layout building blocks. No variants file. |
| Components | `src/components/` | Built on top of core. Have variants, constants, and optional hooks. |
| Theme | `src/theme/` | Tokens, `createTheme`, `ThemeProvider`, `useTheme`. |

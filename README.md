# Vajra UI

A minimal zero-dependency **React Native design system** built around composable primitives and flexible theming.

---

## Philosophy

Vajra UI separates **primitives, theming, and UI components**.

The goal is to keep the foundation minimal and predictable while allowing opinionated UI components to be built on top.

The library does **not enforce design opinions** like color palettes or token names. There is no required theme shape — you define your theme, pass it to the provider, and tell `useTheme` what type to expect.

---

## Usage

### 1. Define your theme

```ts
export const theme = {
  colors: {
    background: '#ffffff',
    surface: '#f5f5f5',
    text: '#111111',
    textMuted: '#888888',
    primary: '#ff6b00',
    border: '#e0e0e0',
  },
  spacing: { none: 0, xs: 4, sm: 8, md: 16, lg: 24, xl: 32 },
  rounded: { none: 0, sm: 4, md: 8, lg: 16, full: 9999 },
  typography: {
    xs: { fontSize: 11, lineHeight: 16, fontWeight: '400' as const },
    sm: { fontSize: 13, lineHeight: 18, fontWeight: '400' as const },
    md: { fontSize: 15, lineHeight: 22, fontWeight: '400' as const },
    lg: { fontSize: 18, lineHeight: 26, fontWeight: '500' as const },
    xl: { fontSize: 22, lineHeight: 30, fontWeight: '600' as const },
    xxl: { fontSize: 28, lineHeight: 36, fontWeight: '700' as const },
  },
};
```

### 2. Wrap your app

```tsx
import { ThemeProvider } from 'vajra-ui';
import { theme } from './theme';

<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>
```

### 3. Create a typed hook

```ts
import { useTheme } from 'vajra-ui';
import { theme } from './theme';

export type TAppTheme = typeof theme;

export const useAppTheme = () => useTheme<TAppTheme>();
```

Use `useAppTheme()` anywhere in your app for full autocomplete against your token keys.

### Built-in themes

Vajra ships optional light and dark themes you can use directly.

```ts
import { ThemeProvider, lightColors, darkColors } from 'vajra-ui';

<ThemeProvider theme={lightColors}>
  <App />
</ThemeProvider>
```

---

## Architecture

Vajra UI is structured in two layers.

### Core Primitives

Low-level, unstyled building blocks. Theme-agnostic — they do not depend on tokens.

- `Box`
- `Row`
- `Col`
- `Grid`
- `Text`
- `Center`
- `AbsoluteCenter`
- `Spacer`
- `Separator`

### UI Kit Components

Opinionated components built on top of core primitives (planned — see Roadmap).

- `Button`
- `Card`
- `Input`
- `Badge`
- `Avatar`
- `Modal`
- `BottomSheet`

UI kit components are optional. Core primitives can be used independently.

---

## Project Structure

```
src/
├── core/                     # Unstyled primitives
│   ├── box/
│   ├── row/
│   ├── col/
│   ├── grid/
│   ├── center/
│   ├── absolute-center/
│   ├── separator/
│   ├── spacer/
│   └── text/
│
├── theme/                    # Theme provider + context
│   ├── provider.tsx
│   ├── provider-types.ts
│   └── index.ts
│
├── hooks/
│   └── use-dimensions.ts
│
├── vajra-theme/              # Default light/dark themes (optional)
│   ├── colors/
│   ├── tokens/
│   ├── themes/
│   └── primitives/
│
└── index.ts
```

---

## Roadmap

### Phase 1 — Foundations

- `Box`
- `Row`
- `Col`
- `Grid`
- `Text`
- `Center`
- `AbsoluteCenter`
- `Spacer`
- `Separator`

### Phase 2 — Basic UI Components

- `Button`
- `Card`
- `Badge`
- `Avatar`
- `Input`

### Phase 3 — Interactive Components

- `Modal`
- `Drawer`
- `BottomSheet`
- `Tabs`
- `Popover`
- `Toast`

### Phase 4 — Advanced Layout

- Animated layouts
- Complex lists
- Interactive containers

---

## Installation

```sh
npm install vajra-ui
```

---

## License

MIT

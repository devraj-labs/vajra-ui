# Vajra UI

A minimal zero-dependency **React Native design system** built around composable primitives and flexible theming.

---

## Philosophy

Vajra UI separates **primitives, theming, and UI components**.

The goal is to keep the foundation minimal and predictable while allowing opinionated UI components to be built on top.

The library does **not enforce design opinions** like color palettes or token names. There is no required theme shape — you define your theme, pass it to the provider, and tell `useTheme` what type to expect.

---

## Usage

There are two ways to use Vajra UI depending on how much control you want.

---

### Path 1 — Zero config with Vajra theme (recommended)

Use `VajraProvider` and get started immediately. Built-in light and dark themes included.

#### 1. Wrap your app

```tsx
import { VajraProvider } from 'vajra-ui';

<VajraProvider colorScheme="light">
  <App />
</VajraProvider>
```

#### 2. Use UI kit components directly

```tsx
import { Button, Card } from 'vajra-ui';

<Card>
  <Button label="Submit" />
</Card>
```

Components pull tokens from `VajraProvider` automatically — colors, spacing, rounded, typography.

#### 3. Or build your own components using `useVajraTheme()`

```tsx
import React, { memo } from 'react';
import { Pressable } from 'react-native';
import { Box, Text, useVajraTheme } from 'vajra-ui';

export const MyButton = memo(({ label }: { label: string }) => {
  const theme = useVajraTheme();

  return (
    <Box bg={theme.colors.primary} px={theme.spacing.lg} py={theme.spacing.sm} rounded={theme.rounded.md}>
      <Text color={theme.colors.onPrimary} fontSize={theme.typography.md.fontSize}>
        {label}
      </Text>
    </Box>
  );
});

MyButton.displayName = 'MyButton';
```

Full autocomplete against all vajra tokens.

#### Overriding tokens

Spread the defaults and override what you need.

```tsx
import { VajraProvider, defaultVajraTheme } from 'vajra-ui';

const myTheme = {
  ...defaultVajraTheme.light,
  colors: { ...defaultVajraTheme.light.colors, primary: '#0055ff' },
};

<VajraProvider theme={myTheme}>
  <App />
</VajraProvider>
```

---

### Path 2 — Fully custom theme

Bring your own token shape. Use `ThemeProvider` directly — no vajra tokens required.

#### 1. Define your theme

```ts
export const theme = {
  colors: {
    background: '#ffffff',
    surface: '#f5f5f5',
    text: '#111111',
    primary: '#ff6b00',
    border: '#e0e0e0',
  },
  spacing: { none: 0, xs: 4, sm: 8, md: 16, lg: 24, xl: 32 },
  rounded: { none: 0, sm: 4, md: 8, lg: 16, full: 9999 },
};
```

#### 2. Wrap your app

```tsx
import { ThemeProvider } from 'vajra-ui';
import { theme } from './theme';

<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>
```

#### 3. Create a typed hook

```ts
import { useTheme } from 'vajra-ui';
import { theme } from './theme';

export type TAppTheme = typeof theme;

export const useAppTheme = () => useTheme<TAppTheme>();
```

#### 4. Build components on top of core primitives

Follow the same pattern as vajra's own core components — wrap primitives, pull tokens via your hook.

```tsx
import React, { memo } from 'react';
import { Pressable } from 'react-native';
import { Box, Text } from 'vajra-ui';
import { useAppTheme } from './hooks/use-app-theme';

export const MyButton = memo(({ label }: { label: string }) => {
  const theme = useAppTheme();

  return (
    <Box bg={theme.colors.primary} px={theme.spacing.lg} py={theme.spacing.sm} rounded={theme.rounded.md}>
      <Text color={theme.colors.text} fontSize={14}>
        {label}
      </Text>
    </Box>
  );
});

MyButton.displayName = 'MyButton';
```

Core primitives (`Box`, `Row`, `Col`, `Text`, etc.) are theme-agnostic — they work with any token shape.

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

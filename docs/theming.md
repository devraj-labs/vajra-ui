# Theming

Vajra UI's theme system is built around semantic design tokens. You can override any token, add your own, switch themes at runtime, and bring custom fonts — all fully typed.

---

## createVajraTheme

The main entry point for setting up your theme.

```ts
import { createVajraTheme } from '@devraj-labs/vajra-ui';

export const theme = createVajraTheme({
  colorScheme: 'light',   // 'light' | 'dark' — defaults to 'light'
  fonts: myFonts,         // required
  colors: { ... },        // optional — partial overrides
  spacing: { ... },       // optional — partial overrides
  rounded: { ... },       // optional — partial overrides
});
```

Pass the result to `VajraProvider`:

```tsx
<VajraProvider theme={theme}>
  <YourApp />
</VajraProvider>
```

---

## Overriding color tokens

Pass a partial `colors` map. Only the keys you provide are overridden — everything else falls back to the Vajra defaults for the chosen `colorScheme`.

```ts
export const theme = createVajraTheme({
  fonts: myFonts,
  colorScheme: 'light',
  colors: {
    primary: '#8B5CF6',
    primaryMuted: '#9D68F0',
    primarySubtle: '#F5F3FF',
    borderFocus: '#9D68F0',
  },
});
```

---

## Overriding spacing tokens

```ts
export const theme = createVajraTheme({
  fonts: myFonts,
  spacing: {
    's-4': 20,  // bump the base padding unit
    's-6': 28,
  },
});
```

---

## Overriding border radius tokens

```ts
export const theme = createVajraTheme({
  fonts: myFonts,
  rounded: {
    'r-2': 10,     // slightly rounder cards
    'r-3': 16,
  },
});
```

---

## Adding your own tokens

### Custom colors

Consumer apps often need extra tokens for their own components — colours outside the Vajra semantic set, brand-specific values, etc.

Augment `IVajraCustomColors` in your app. Your tokens become part of `TVajraColors` and are typed through `useVajraTheme()` alongside ours.

**Step 1 — Declare your tokens**

```ts
// theme.ts
declare module '@devraj-labs/vajra-ui' {
  interface IVajraCustomColors {
    surfaceAccent: string;
    brandGold: string;
    highlightYellow: string;
  }
}
```

**Step 2 — Provide values in createVajraTheme**

```ts
export const theme = createVajraTheme({
  fonts: myFonts,
  colors: {
    surfaceAccent: '#F0E6FF',
    brandGold: '#D4A017',
    highlightYellow: '#FFF176',
  },
});
```

**Step 3 — Use them in your components**

```tsx
import { useVajraTheme } from '@devraj-labs/vajra-ui';

export function MyCard() {
  const { colors } = useVajraTheme();

  return (
    <View style={{ backgroundColor: colors.surfaceAccent }}>
      <View style={{ borderColor: colors.brandGold }} />
    </View>
  );
}
```

`colors.surfaceAccent` and `colors.brandGold` are fully typed and autocomplete in your editor.

> Our components only reference our own tokens — nothing breaks. Your tokens are only visible to your components through the same hook.

---

### Custom rounded tokens

Augment `IVajraRoundedTokens` to add your own border radius tokens. They will be accepted by the `rounded`, `roundedT`, `roundedB`, `roundedL`, and `roundedR` props on `Box` and other components, with full autocomplete.

**Step 1 — Declare your tokens**

```ts
// theme.ts
declare module '@devraj-labs/vajra-ui' {
  interface IVajraRoundedTokens {
    'r-12': number;
    'r-16': number;
  }
}
```

**Step 2 — Use them in your components**

```tsx
<Box rounded="r-12">...</Box>       {/* ✅ typed, autocompletes */}
<Box roundedT="r-16">...</Box>      {/* ✅ typed, autocompletes */}
```

> Custom rounded tokens don't need to be provided to `createVajraTheme`. They're resolved at the prop level — just declare the interface and use the token names directly as raw px values are not needed in the theme config.

---

## Custom fonts

```ts
import { createVajraTheme } from '@devraj-labs/vajra-ui';

const myFonts = {
  inter: {
    '400': 'Inter-Regular',
    '500': 'Inter-Medium',
    '700': 'Inter-Bold',
  },
};

export const theme = createVajraTheme({ fonts: myFonts });
```

Augment `IVajraFonts` to get autocomplete on `<Text font="..." />`:

```ts
export type TAppFonts = keyof typeof myFonts;

declare module '@devraj-labs/vajra-ui' {
  interface IVajraFonts extends Record<TAppFonts, true> {}
}
```

```tsx
<Text font="inter" fontWeight="700">Bold Inter text</Text>
```

---

## Runtime theme switching

Hold theme state at the app root, rebuild with `createVajraTheme` on change, pass the result down to `VajraProvider`.

```tsx
import { useState } from 'react';
import { VajraProvider, createVajraTheme } from '@devraj-labs/vajra-ui';

type TColorScheme = 'light' | 'dark';

const presets = {
  default: {},
  purple: { primary: '#8B5CF6', primaryMuted: '#9D68F0', primarySubtle: '#F5F3FF' },
  orange: { primary: '#F97316', primaryMuted: '#FB923C', primarySubtle: '#FFF7ED' },
};

type TPreset = keyof typeof presets;

export function AppWithTheme({ children }: { children: React.ReactNode }) {
  const [preset, setPreset] = useState<TPreset>('default');
  const [colorScheme, setColorScheme] = useState<TColorScheme>('light');

  const theme = createVajraTheme({
    fonts: myFonts,
    colorScheme,
    colors: presets[preset],
  });

  return (
    <VajraProvider theme={theme}>
      {children}
    </VajraProvider>
  );
}
```

---

## useVajraTheme

Access the resolved theme anywhere inside `VajraProvider`.

```tsx
import { useVajraTheme } from '@devraj-labs/vajra-ui';

const { colors, spacing, rounded, typography, fonts } = useVajraTheme();
```

| Property | Type | Description |
|----------|------|-------------|
| `colors` | `Record<TVajraColors, string>` | All color tokens, resolved to hex strings |
| `spacing` | `Record<TSpacingToken, number>` | All spacing tokens, resolved to numbers |
| `rounded` | `Record<TRoundedToken, number>` | All border radius tokens, resolved to numbers |
| `typography` | `Record<TFontVariant, TFontVariantProps>` | Font size, line height, weight per variant |
| `fonts` | your font map | Custom font families, if provided |

---

## Token reference

### Colors — `TVajraColors`

| Token | Description |
|-------|-------------|
| `primary` | Brand primary |
| `primaryMuted` | Softer primary |
| `primarySubtle` | Background tint of primary |
| `secondary` | Brand secondary |
| `secondaryMuted` | Softer secondary |
| `secondarySubtle` | Background tint of secondary |
| `text` | Default text |
| `textMuted` | Subdued text |
| `textInverse` | Text on dark/colored backgrounds |
| `textDisabled` | Disabled state text |
| `background` | Screen background |
| `surfaceSunken` | Recessed surface |
| `surface` | Card / sheet background |
| `surfaceRaised` | Elevated surface |
| `surfaceOverlay` | Overlay / modal surface |
| `overlay` | Semi-transparent scrim |
| `border` | Default dividers and outlines |
| `borderStrong` | Emphasized borders |
| `borderFocus` | Focus ring |
| `error` / `errorMuted` / `errorSubtle` | Error feedback scale |
| `success` / `successMuted` / `successSubtle` | Success feedback scale |
| `warning` / `warningMuted` / `warningSubtle` | Warning feedback scale |
| `info` / `infoMuted` / `infoSubtle` | Info feedback scale |
| `transparent` | Transparent |

### Spacing — `TSpacingToken`

| Token | Value (px) |
|-------|-----------|
| `s-0` | 0 |
| `s-1` | 4 |
| `s-2` | 8 |
| `s-3` | 12 |
| `s-4` | 16 |
| `s-5` | 20 |
| `s-6` | 24 |
| `s-8` | 32 |
| `s-10` | 40 |
| `s-12` | 48 |
| `s-16` | 64 |

### Border Radius — `TRoundedToken`

| Token | Value (px) |
|-------|-----------|
| `r-0` | 0 |
| `r-1` | 4 |
| `r-2` | 8 |
| `r-3` | 12 |
| `r-4` | 16 |
| `r-5` | 20 |
| `r-6` | 24 |
| `r-7` | 28 |
| `r-8` | 32 |
| `r-9` | 36 |
| `r-10` | 40 |
| `r-full` | 9999 |

### Typography — `TFontVariant`

| Variant | Font Size | Line Height | Weight | Use |
|---------|-----------|-------------|--------|-----|
| `display` | 32 | 40 | 700 | Hero text |
| `h1` | 28 | 36 | 700 | Page title |
| `h2` | 24 | 32 | 600 | Section title |
| `h3` | 20 | 28 | 600 | Sub-section title |
| `subheading` | 16 | 24 | 500 | Section label |
| `body` | 15 | 22 | 400 | Default body copy |
| `bodyMedium` | 15 | 22 | 500 | Emphasized body |
| `bodySmall` | 13 | 18 | 400 | Secondary body copy |
| `button` | 15 | 22 | 600 | Button labels |
| `label` | 12 | 16 | 400 | Small UI labels |
| `labelMedium` | 12 | 16 | 500 | Medium weight label |
| `caption` | 13 | 18 | 400 | Helper text, timestamps |

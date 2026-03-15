# Vajra UI

A minimal React Native component library and theming system.

---

## Philosophy

Vajra UI does not ship opinions about your design. No preset color palettes, no enforced token names, no light/dark logic baked in.

You bring your theme. The library maps it to styles.

```ts
const theme = {
  colors: { background: '#fff', primary: '#ff6b00' },
  spacing: { sm: 8, md: 16, lg: 24 },
  rounded: { md: 8, full: 9999 },
  typography: {
    body: { fontSize: 15, lineHeight: 22, fontWeight: '400' },
    heading: { fontSize: 22, lineHeight: 30, fontWeight: '700' },
  },
};

<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>
```

Components resolve token keys to values at render time. Token names are yours.

---

## Theme contract

For components to work, your theme must satisfy `TVajraThemeContract`:

```ts
type TVajraThemeContract = {
  colors: Record<string, string>;
  spacing: Record<string, number>;
  rounded: Record<string, number>;
  typography: Record<string, TextStyle>;
};
```

Shape is enforced. Key names are not.

---

## Autocomplete

Pass your theme type to `useTheme` to get full autocomplete:

```ts
type MyTheme = typeof theme;
const { colors } = useTheme<MyTheme>();
colors.primary; // ✅
```

Same pattern as styled-components — the library stays generic, you own the types.

---

## What's included

- `ThemeProvider` + `useTheme`
- Core primitives: `Box`, `Text`, `Grid`, `Center`, `Separator`
- A default theme for quick starts (optional)
- UI kit components built on the default theme (buttons, inputs, cards — in progress)

UI kit components require the default theme's token names. Core primitives work with any theme.

---

## Structure

```
src/
├── theme/
│   ├── provider.tsx          # ThemeProvider + useTheme
│   ├── provider-types.ts     # TVajraThemeContract, TFontVariant
│   └── index.ts
│
├── core/                     # Theme-agnostic layout primitives
│   ├── box/
│   ├── text/
│   ├── row/
│   ├── col/
│   ├── grid/
│   ├── center/
│   ├── absolute-center/
│   ├── separator/
│   ├── spacer/
│   └── index.ts
│
├── hooks/
│   └── use-dimensions.ts
│
└── index.ts
```

---

## Installation

```bash
npm install vajra-ui
```

---

## License

MIT

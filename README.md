# @vajra-ui/ui

A minimal React Native UI component library with a **bring your own tokens** model.

Use the built-in Vajra theme and get going in seconds — or plug in your own token shape and stay in full control. Zero design opinions forced on you.

---

## Packages

| Package | Description |
|---------|-------------|
| [`@vajra-ui/core`](https://github.com/rishav-jha-mech/vajra-core) | Headless, unstyled primitives. No theme, no tokens. |
| `@vajra-ui/ui` *(this)* | Token-aware components + optional Vajra theme. |

---

## Installation

```sh
npm install @vajra-ui/ui @vajra-ui/core
```

---

## Two ways to use it

### Option 1 — Vajra theme (zero config)

Use the built-in light/dark theme. Wrap your app with `VajraProvider` and start building.

```tsx
import { VajraProvider, Button, Input } from '@vajra-ui/ui';

export default function App() {
  return (
    <VajraProvider colorScheme="light">
      <App />
    </VajraProvider>
  );
}
```

Access tokens anywhere via `useVajraTheme`:

```tsx
import { useVajraTheme, Box, Text } from '@vajra-ui/ui';

const Banner = () => {
  const theme = useVajraTheme();

  return (
    <Box bg="primary" p="s-4" rounded="r-2">
      <Text variant="body" color="textInverse">Hello</Text>
    </Box>
  );
};
```

Override specific tokens:

```tsx
import { VajraProvider, defaultVajraTheme } from '@vajra-ui/ui';

const myTheme = {
  ...defaultVajraTheme.light,
  colors: { ...defaultVajraTheme.light.colors, primary: '#ff6b00' },
};

<VajraProvider theme={myTheme}>
  <App />
</VajraProvider>
```

---

### Option 2 — Bring your own tokens

Define any token shape you want. Use `ThemeProvider` directly.

```ts
// theme.ts
import { useTheme } from '@vajra-ui/ui';

export const theme = {
  colors: {
    background: '#eeecee',
    surface: '#ffffff',
    text: '#0d0d0d',
    textMuted: '#838383',
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
  },
};

export type TAppTheme = typeof theme;
export const useAppTheme = () => useTheme<TAppTheme>();
```

```tsx
// App.tsx
import { ThemeProvider } from '@vajra-ui/ui';
import { theme } from './theme';

<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>
```

```tsx
// MyComponent.tsx
import { useAppTheme } from './theme';
import { Box, Text } from '@vajra-ui/core';

const Banner = () => {
  const theme = useAppTheme();

  return (
    <Box style={{ backgroundColor: theme.colors.primary, padding: theme.spacing.md }}>
      <Text style={{ color: theme.colors.surface, fontSize: theme.typography.md.fontSize }}>
        Hello
      </Text>
    </Box>
  );
};
```

> See the [example app](./examples/) for a full working setup with custom tokens.

---

## Vajra Theme Tokens

### Colors — `TColorToken`

| Token | Description |
|-------|-------------|
| `primary` | Brand primary |
| `primaryMuted` | Softer primary |
| `primarySubtle` | Background tint |
| `secondary` | Brand secondary |
| `text` | Default text |
| `textMuted` | Subdued text |
| `textInverse` | Text on dark backgrounds |
| `surface` | Card / sheet background |
| `background` | Screen background |
| `border` | Dividers and outlines |
| `error` | Error state |
| `success` | Success state |
| `warning` | Warning state |

### Spacing — `TSpacingToken`

| Token | Value |
|-------|-------|
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

### Rounded — `TRoundedToken`

| Token | Value |
|-------|-------|
| `r-0` | 0 |
| `r-1` | 4 |
| `r-2` | 8 |
| `r-3` | 12 |
| `r-4` | 16 |
| `r-6` | 24 |
| `r-full` | 9999 |

### Typography — `TFontVariant`

| Variant | Use |
|---------|-----|
| `label` | Small UI labels |
| `caption` | Helper text, timestamps |
| `bodySmall` | Secondary body copy |
| `body` | Default body |
| `bodyMedium` | Emphasized body |
| `button` | Button labels |
| `subheading` | Section headers |
| `heading` | Page titles |

---

## Components

### Box

```tsx
<Box bg="surface" p="s-4" rounded="r-2" borderColor="border" borderWidth={1} />
```

### Row / Col

```tsx
<Row gap="s-2" align="center">
  <Col flex={1}>...</Col>
  <Col flex={1}>...</Col>
</Row>
```

### Text

```tsx
<Text variant="heading" color="text">Title</Text>
<Text variant="body" color="textMuted">Subtitle</Text>
```

### Button

```tsx
<Button label="Submit" />
<Button label="Delete" variant="outline" colorPalette="error" />
<Button label="Save" size="sm" isLoading />
<Button label="Off" isDisabled />
```

### Input

```tsx
<Input placeholder="Email" label="Email" size="md" />
<Input isInvalid errorText="This field is required" />
<Input isDisabled helperText="Cannot edit right now" />
```

### Checkbox

```tsx
<Checkbox>
  <Checkbox.Item value="a" label="Option A" />
  <Checkbox.Item value="b" label="Option B" />
</Checkbox>
```

### Radio

```tsx
<Radio>
  <Radio.Item value="a" label="Option A" />
  <Radio.Item value="b" label="Option B" />
</Radio>
```

### Switch

```tsx
<Switch>
  <Switch.Item value="notifications" label="Notifications" />
</Switch>
```

### Card

```tsx
<Card>
  <Text variant="body">Content goes here</Text>
</Card>
```

### Icon Button

```tsx
<IconButton icon={<MyIcon />} onPress={handlePress} />
```

---

## License

MIT

---
id: intro
title: Introduction
sidebar_position: 1
slug: /
---

# Vajra UI

A minimal, token-driven React Native component library. Bring your own brand — override what you need, build the rest on top.

- **Token-first** — every prop (`bg`, `p`, `rounded`, `color`) maps to a design token, never a raw value.
- **Themeable** — override colors, spacing, and border radii via `createVajraTheme`; switch themes at runtime.
- **Typed end to end** — tokens are typed unions, no magic strings slip through.
- **Headless core** — unstyled primitives in `@devraj-labs/vajra-ui-core` if you want full control.

## Installation

```sh
npm install @devraj-labs/vajra-ui
```

```sh
npm install react react-native react-native-safe-area-context
```

## Quick start

```tsx
import { VajraProvider, Box, Text, Button } from '@devraj-labs/vajra-ui';

export default function App() {
  return (
    <VajraProvider colorScheme="light">
      <Box p="s-4" gap="s-3">
        <Text variant="subheading">Hello</Text>
        <Button label="Get started" onPress={() => {}} />
      </Box>
    </VajraProvider>
  );
}
```

See [Theming](./theming.md) for the full token and customization guide.

---
id: text-italic-fonts
title: Text — Italic Fonts & Cross-Platform Behaviour
sidebar_position: 3
---

# Text Component — Italic Fonts & Cross-Platform Behaviour

## The Problem

React Native handles italic fonts differently on iOS and Android when named font files (PostScript names) are used.

- **Android** — resolving the PostScript name of the italic variant (e.g. `Newsreader9pt-Italic`) is enough. Passing `fontStyle: 'italic'` in the style object on top of that causes Android to apply a synthetic skew over the already-italic font, breaking the rendering (wrong typeface, not Newsreader at all).
- **iOS** — resolving the PostScript name alone is not enough. iOS also requires `fontStyle: 'italic'` to be present in the style object, otherwise the font renders as regular (no italic).

So the two platforms need opposite behaviour when a named italic font file exists.

## How the Text Component Handles It

The `Text` component in vajra-ui resolves this internally. When you pass `fontStyle="italic"` and the font has a registered italic variant in the fonts map (e.g. `newsreader9pt` has `400i: 'Newsreader9pt-Italic'`), the component:

1. Resolves the PostScript font family name for the italic variant and passes it to `fontFamily`.
2. On **iOS** — also passes `fontStyle: 'italic'` in the style object (required for iOS to render it correctly).
3. On **Android** — sets `fontStyle: undefined` in the style object (PostScript name alone is sufficient; passing `fontStyle` would cause synthetic italic on top).

This is handled in `src/ui/core/text/text.tsx`:

```ts
fontStyle: hasItalicFontFile
  ? Platform.OS === 'ios'
    ? fontStyle      // iOS needs it explicitly
    : undefined      // Android: PostScript name is enough
  : fontStyle,       // No named italic file — fall back to synthetic italic on both
```

## How to Use

Just pass `fontStyle="italic"` as a prop. The component handles the rest — no platform checks, no StyleSheet workarounds needed in consuming code.

```tsx
<Text font="newsreader9pt" fontSize="_f-36px" color="text" fontStyle="italic">
  Templates
</Text>
```

## What NOT to Do

Never duplicate `fontStyle: 'italic'` in a `StyleSheet` alongside the DS prop. The `style` prop is spread after the component's internal style object, so it would override the platform-specific logic and re-introduce the Android bug.

```tsx
// BAD — breaks Android
const styles = StyleSheet.create({
  title: { fontStyle: 'italic' },
});
<Text font="newsreader9pt" fontStyle="italic" style={styles.title}>...</Text>

// GOOD
<Text font="newsreader9pt" fontStyle="italic">...</Text>

// GOOD — other style props are fine, just don't include fontStyle
const styles = StyleSheet.create({
  title: { marginTop: 8, opacity: 0.7 },
});
<Text font="newsreader9pt" fontStyle="italic" style={styles.title}>...</Text>
```

## Fonts Without a Named Italic File

If a font has no italic variant registered in the fonts map, the component falls back to passing `fontStyle: 'italic'` on both platforms, which triggers the OS-level synthetic italic. This is the correct fallback for fonts that don't ship italic TTF files.

## Background — What Triggered This Fix

The bug was discovered while comparing templates screen rendering side-by-side on iOS and Android. The original implementation suppressed `fontStyle` entirely when a named italic font file existed (assuming PostScript name was enough on all platforms). iOS renders were showing regular weight instead of italic. The fix introduced the platform split — Android keeps the suppression, iOS gets the explicit pass-through.

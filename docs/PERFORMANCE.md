# Performance: the vajra-ui → vajra-ui-core layer

`vajra-ui`'s styled components wrap headless primitives from `@devraj-labs/vajra-ui-core`
(`Box` wraps `CoreBox`, which wraps React Native's `View`). Two extra function calls per
node before you hit a host component is a fair thing to ask about — this doc answers it
with numbers instead of assertions.

## Why the layering exists

`vajra-ui-core` owns layout/spacing math and has zero dependencies beyond React Native.
`vajra-ui` owns theming (color tokens, spacing scale, dark mode) and is built on top of it.
Splitting headless primitives from a styled layer is the same shape as Radix UI / Base UI /
react-aria — it exists so the layout logic isn't duplicated per styled component, and so
`vajra-ui-core` can be used standalone by anyone who wants primitives without a theme.

## The benchmark

[`scripts/bench-box-layers.bench.tsx`](../scripts/bench-box-layers.bench.tsx) mounts trees of
100 / 1,000 / 5,000 sibling nodes for three cases and takes the median of 20 runs each, after
a warm-up pass to let the JIT settle:

- **Raw View** — plain React Native `<View>`, no wrapper.
- **CoreBox** — `@devraj-labs/vajra-ui-core`'s `Box`, one layer over `View`.
- **Box** — `vajra-ui`'s styled `Box`, two layers over `View` (resolves color/spacing
  tokens, then delegates to `CoreBox`).

Reproduce it yourself (it's excluded from the normal `yarn test` run since it's a
9-second timing benchmark, not a correctness check):

```bash
npx jest --config jest.config.js --testMatch '**/scripts/*.bench.tsx' --verbose
```

### Results

| Tree size | Raw View (median ms) | CoreBox (median ms) | Box (median ms) | Box vs View overhead |
|---|---|---|---|---|
| 100 | 1.00 | 2.00 | 2.00 | +1.00ms total, 10.00µs/node |
| 1,000 | 12.50 | 21.00 | 24.00 | +11.50ms total, 11.50µs/node |
| 5,000 | 67.00 | 106.00 | 128.50 | +61.50ms total, 12.30µs/node |

Per-node overhead stays flat at roughly **10–12µs** across two orders of magnitude of tree
size — it doesn't compound, and it isn't hiding an accidental O(n²) somewhere in the theme
resolution path.

For scale: a genuinely large real screen (a long settings list, a dense form) might mount a
few hundred styled nodes at once. At 300 nodes that's roughly **3–4ms** of extra reconciliation
time for the entire screen, one time, at mount — not per frame, not per scroll, not per
re-render of an unrelated node (see memoization below).

## What this measures, and what it doesn't

This benchmark measures JS-side render/reconciliation cost via `react-test-renderer`, run
on this machine's CPU. It does **not** measure native paint, layout, or the old RN bridge's
serialization cost — those happen at the host-component (`View`) level regardless of how
many JS wrapper functions sit above it, so they're identical across all three cases and not
what the extra layer could possibly affect. If you're chasing a real frame-drop, profile with
Flipper/the RN DevTools first — it is very unlikely to point at this layer.

## Why it doesn't compound in practice

- **Every styled component is wrapped in `React.memo`.** Re-renders where props are
  referentially unchanged skip reconciliation for that subtree entirely — the wrapper cost
  above only applies once, at initial mount or when props actually change.
- **The overhead is a function call, not I/O.** There's no network request, no bridge
  round-trip, no synchronous layout pass hiding in the wrapper — it's token lookups
  (`colors[bg]`, `spacing[gap]`) and a prop spread.

## Bottom line

Two wrapper layers cost about 10µs per node at mount, don't compound with tree size, and
are skipped on re-render for anything memoized with stable props. If this ever regresses —
a future change makes the theme-resolution path do real work per render instead of at
mount, for instance — this benchmark is the regression test: rerun it and diff the table.

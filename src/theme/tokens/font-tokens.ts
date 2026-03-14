// Font tokens are compound variants — consumers pick a named scale (xs, sm, md…)
// and get a paired fontSize + lineHeight + fontWeight back.
// Individual fontSize/fontWeight values are intentionally not exposed.

export type TFontVariant = {
  fontSize: number;
  lineHeight: number;
  fontWeight: '400' | '500' | '600' | '700';
};

export const fontTokens = {
  xs: { fontSize: 11, lineHeight: 16, fontWeight: '400' },
  sm: { fontSize: 13, lineHeight: 18, fontWeight: '400' },
  md: { fontSize: 15, lineHeight: 22, fontWeight: '400' },
  lg: { fontSize: 18, lineHeight: 26, fontWeight: '500' },
  xl: { fontSize: 22, lineHeight: 30, fontWeight: '600' },
  xxl: { fontSize: 28, lineHeight: 36, fontWeight: '700' },
} as const satisfies Record<string, TFontVariant>;

export type TFontToken = keyof typeof fontTokens;

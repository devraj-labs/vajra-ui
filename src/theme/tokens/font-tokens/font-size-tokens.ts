export const fontSizeTokens = {
  xs: 11,
  sm: 13,
  md: 15,
  lg: 18,
  xl: 22,
  xxl: 28,
} as const;

export type TFontSizeToken = keyof typeof fontSizeTokens;

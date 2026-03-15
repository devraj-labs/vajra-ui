export const lineHeightTokens = {
  xs: 16,
  sm: 18,
  md: 22,
  lg: 26,
  xl: 30,
  xxl: 36,
} as const;

export type TLineHeightToken = keyof typeof lineHeightTokens;

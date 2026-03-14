export const fontWeightTokens = {
  xs: '400',
  sm: '400',
  md: '400',
  lg: '500',
  xl: '600',
  xxl: '700',
} as const;

export type TFontWeight = '400' | '500' | '600' | '700';
export type TFontWeightToken = keyof typeof fontWeightTokens;

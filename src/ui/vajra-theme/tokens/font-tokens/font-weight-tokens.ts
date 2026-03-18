export const fontWeightTokens = {
  'f-400': '400',
  'f-500': '500',
  'f-600': '600',
  'f-700': '700',
} as const;

export type TFontWeightToken = keyof typeof fontWeightTokens;

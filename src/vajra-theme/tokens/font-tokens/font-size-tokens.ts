export const fontSizeTokens = {
  'f-1': 12,
  'f-1.5': 14,
  'f-2': 16,
  'f-3': 20,
  'f-4': 24,
  'f-5': 28,
  'f-6': 32,
} as const;

export type TFontSizeToken = keyof typeof fontSizeTokens;

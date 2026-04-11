export const lineHeightTokens = {
  'f-1': 16,
  'f-1.5': 18,
  'f-2': 20,
  'f-2.5': 24,
  'f-3': 24,
  'f-4': 28,
  'f-5': 32,
  'f-6': 36,
} as const;

export type TLineHeightToken = keyof typeof lineHeightTokens;

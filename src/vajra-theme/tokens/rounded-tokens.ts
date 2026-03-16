export const roundedTokens = {
  'r-0': 0,
  'r-1': 4,
  'r-2': 8,
  'r-3': 12,
  'r-4': 16,
  'r-6': 24,
  'r-full': 9999,
} as const;

export type TRoundedToken = keyof typeof roundedTokens;

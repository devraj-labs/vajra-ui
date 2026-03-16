export const layoutTokens = {
  screenPadding: 20,
  sectionGap: 24,
  componentGap: 12,
} as const;

export type TLayoutToken = keyof typeof layoutTokens;

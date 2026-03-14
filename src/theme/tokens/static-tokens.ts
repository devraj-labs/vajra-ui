import { spacingTokens } from './spacing-tokens';
import { roundedTokens } from './rounded-tokens';
import { fontTokens } from './font-tokens/index';

export const staticTokens = {
  spacing: spacingTokens,
  rounded: roundedTokens,
  font: fontTokens,
} as const;

export type TStaticTokens = typeof staticTokens;

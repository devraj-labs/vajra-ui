import { spacingTokens } from './spacing-tokens';
import { roundedTokens } from './rounded-tokens';
import { fontVariants } from './font-tokens/index';
import { layoutTokens } from './layout-tokens';

export const staticTokens = {
  spacing: spacingTokens,
  rounded: roundedTokens,
  font: fontVariants,
  layout: layoutTokens,
} as const;

export type TStaticTokens = typeof staticTokens;

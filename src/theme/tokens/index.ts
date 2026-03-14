import { colorTokens } from './color-tokens';
import { spacingTokens } from './spacing-tokens';
import { roundedTokens } from './rounded-tokens';
import { fontTokens } from './font-tokens/index';

export const tokens = {
  colors: colorTokens,
  spacing: spacingTokens,
  rounded: roundedTokens,
  font: fontTokens,
};

export type TTokens = typeof tokens;

export * from './color-tokens';
export * from './spacing-tokens';
export * from './rounded-tokens';
export * from './font-tokens/index';

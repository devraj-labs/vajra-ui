import { colorTokens } from './color-tokens';
import { spacingTokens } from './spacing-tokens';
import { roundedTokens } from './rounded-tokens';
import { fontTokens } from './font-tokens';

export const tokens = {
  colors: colorTokens,
  spacing: spacingTokens,
  rounded: roundedTokens,
  font: fontTokens,
};

export type TTokens = typeof tokens;

export { colorTokens } from './color-tokens';
export type { TColorToken } from './color-tokens';

export { spacingTokens } from './spacing-tokens';
export type { TSpacingToken } from './spacing-tokens';

export { roundedTokens } from './rounded-tokens';
export type { TRoundedToken } from './rounded-tokens';

export { fontTokens } from './font-tokens';
export type { TFontToken, TFontVariant } from './font-tokens';

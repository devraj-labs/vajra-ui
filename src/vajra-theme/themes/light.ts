import { lightColorTokens } from '../colors';
import { spacingTokens } from '../tokens/spacing-tokens';
import { roundedTokens } from '../tokens/rounded-tokens';
import { fontTokens } from '../tokens/font-tokens/index';
import { layoutTokens } from '../tokens/layout-tokens';
import type { VajraTheme } from '../../theme';

export const lightColors: VajraTheme = {
  colors: lightColorTokens,
  spacing: spacingTokens,
  rounded: roundedTokens,
  typography: fontTokens,
  layout: layoutTokens,
};

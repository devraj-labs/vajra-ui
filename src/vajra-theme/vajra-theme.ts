import { lightColorTokens, darkColorTokens } from './colors';
import { spacingTokens } from './tokens/spacing-tokens';
import { roundedTokens } from './tokens/rounded-tokens';
import { fontTokens } from './tokens/font-tokens/index';
import { layoutTokens } from './tokens/layout-tokens';

const staticTokens = {
  spacing: spacingTokens,
  rounded: roundedTokens,
  typography: fontTokens,
  layout: layoutTokens,
};

export const defaultVajraTheme = {
  light: {
    colors: lightColorTokens,
    ...staticTokens,
  },
  dark: {
    colors: darkColorTokens,
    ...staticTokens,
  },
};

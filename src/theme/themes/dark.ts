import { colorPrimitives } from '../primitives/colors';
import { staticTokens } from '../tokens';
import type { TVajraTheme } from '../provider-types';
import type { TColorTokensBase } from '../tokens/colors';

const colorTokens: TColorTokensBase = {
  brand: {
    primary: colorPrimitives.saffron400,
    primaryMuted: colorPrimitives.saffron500,
    primarySubtle: colorPrimitives.saffron900,
    secondary: colorPrimitives.crimson400,
    secondaryMuted: colorPrimitives.crimson600,
    secondarySubtle: colorPrimitives.crimson900,
  },
  surface: {
    background: colorPrimitives.gray900,
    surfaceSunken: colorPrimitives.black,
    surface: colorPrimitives.gray800,
    surfaceRaised: colorPrimitives.gray700,
    surfaceOverlay: colorPrimitives.gray600,
    overlay: colorPrimitives.blackAlpha40,
  },
  typography: {
    text: colorPrimitives.white,
    textMuted: colorPrimitives.gray400,
    textInverse: colorPrimitives.gray900,
    textDisabled: colorPrimitives.gray600,
  },
  border: {
    border: colorPrimitives.gray700,
    borderStrong: colorPrimitives.gray500,
    borderFocus: colorPrimitives.blue400,
  },
  feedback: {
    error: colorPrimitives.red400,
    errorMuted: colorPrimitives.red800,
    errorSubtle: colorPrimitives.red900,
    success: colorPrimitives.green400,
    successMuted: colorPrimitives.green800,
    successSubtle: colorPrimitives.green900,
    warning: colorPrimitives.yellow400,
    warningMuted: colorPrimitives.yellow800,
    warningSubtle: colorPrimitives.yellow900,
    info: colorPrimitives.blue300,
    infoMuted: colorPrimitives.blue800,
    infoSubtle: colorPrimitives.blue900,
  },
};

export const darkColors: TVajraTheme = {
  ...staticTokens,
  colors: {
    ...colorTokens,
    flat: {
      ...colorTokens.brand,
      ...colorTokens.surface,
      ...colorTokens.typography,
      ...colorTokens.border,
      ...colorTokens.feedback,
    },
  },
};

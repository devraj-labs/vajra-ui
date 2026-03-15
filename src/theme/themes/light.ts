import { colorPrimitives } from '../primitives/colors';
import { staticTokens } from '../tokens';
import type { TVajraTheme } from '../provider-types';
import type { TColorTokensBase } from '../tokens/colors';

const colorTokens: TColorTokensBase = {
  brand: {
    primary: colorPrimitives.saffron500,
    primaryMuted: colorPrimitives.saffron400,
    primarySubtle: colorPrimitives.saffron50,
    secondary: colorPrimitives.crimson500,
    secondaryMuted: colorPrimitives.crimson400,
    secondarySubtle: colorPrimitives.crimson50,
  },
  surface: {
    background: colorPrimitives.white,
    surfaceSunken: colorPrimitives.gray50,
    surface: colorPrimitives.gray100,
    surfaceRaised: colorPrimitives.gray200,
    surfaceOverlay: colorPrimitives.gray300,
    overlay: colorPrimitives.blackAlpha40,
  },
  typography: {
    text: colorPrimitives.gray900,
    textMuted: colorPrimitives.gray500,
    textInverse: colorPrimitives.white,
    textDisabled: colorPrimitives.gray400,
  },
  border: {
    border: colorPrimitives.gray200,
    borderStrong: colorPrimitives.gray400,
    borderFocus: colorPrimitives.blue500,
  },
  feedback: {
    error: colorPrimitives.red500,
    errorMuted: colorPrimitives.red100,
    errorSubtle: colorPrimitives.red50,
    success: colorPrimitives.green500,
    successMuted: colorPrimitives.green100,
    successSubtle: colorPrimitives.green50,
    warning: colorPrimitives.yellow500,
    warningMuted: colorPrimitives.yellow100,
    warningSubtle: colorPrimitives.yellow50,
    info: colorPrimitives.blue400,
    infoMuted: colorPrimitives.blue100,
    infoSubtle: colorPrimitives.blue50,
  },
};

export const lightColors: TVajraTheme = {
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

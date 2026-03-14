import { colorPrimitives } from '../primitives/colors';
import { staticTokens } from '../tokens';
import type { TVajraTheme } from '../provider-types';

export const lightColors: TVajraTheme = {
  ...staticTokens,
  brand: {
    primary: colorPrimitives.blue500,
    primaryMuted: colorPrimitives.blue400,
    secondary: colorPrimitives.purple600,
    secondaryMuted: colorPrimitives.purple400,
  },
  surface: {
    background: colorPrimitives.white,
    surface: colorPrimitives.gray100,
    surfaceRaised: colorPrimitives.gray200,
    overlay: colorPrimitives.blackAlpha40,
  },
  text: {
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
    success: colorPrimitives.green500,
    successMuted: colorPrimitives.green100,
    warning: colorPrimitives.yellow500,
    warningMuted: colorPrimitives.yellow100,
    info: colorPrimitives.blue400,
    infoMuted: colorPrimitives.blue100,
  },
};

import { colorPrimitives } from '../primitives/colors';
import { staticTokens } from '../tokens';
import type { TTheme } from '../provider-types';

export const darkColors: TTheme = {
  ...staticTokens,
  brand: {
    primary: colorPrimitives.blue400,
    primaryMuted: colorPrimitives.blue500,
    secondary: colorPrimitives.purple400,
    secondaryMuted: colorPrimitives.purple600,
  },
  surface: {
    background: colorPrimitives.gray900,
    surface: colorPrimitives.gray800,
    surfaceRaised: colorPrimitives.gray700,
    overlay: colorPrimitives.blackAlpha40,
  },
  text: {
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

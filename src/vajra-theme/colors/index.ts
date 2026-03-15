import { brandLight, brandDark } from './brand';
import { surfaceLight, surfaceDark } from './surface';
import { textLight, textDark } from './text';
import { borderLight, borderDark } from './border';
import { feedbackLight, feedbackDark } from './feedback';

export const lightColorTokens = {
  ...brandLight,
  ...surfaceLight,
  ...textLight,
  ...borderLight,
  ...feedbackLight,
};

export const darkColorTokens = {
  ...brandDark,
  ...surfaceDark,
  ...textDark,
  ...borderDark,
  ...feedbackDark,
};

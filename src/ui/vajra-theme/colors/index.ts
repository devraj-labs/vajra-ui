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
  transparent: 'transparent' as const,
};

export const darkColorTokens = {
  ...brandDark,
  ...surfaceDark,
  ...textDark,
  ...borderDark,
  ...feedbackDark,
  transparent: 'transparent' as const,
};

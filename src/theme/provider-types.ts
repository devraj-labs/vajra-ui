import React from 'react';

import type { TColorTheme } from './tokens/colors';
import type { TStaticTokens } from './tokens';

export type TTheme = TColorTheme & TStaticTokens;

export type TThemeProviderProps = {
  children: React.ReactNode;
};

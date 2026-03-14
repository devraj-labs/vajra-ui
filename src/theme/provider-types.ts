import React from 'react';

import type { TColorTheme } from './tokens/colors';
import type { TStaticTokens } from './tokens';

export type TVajraTheme = TColorTheme & TStaticTokens;

export type TDeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? TDeepPartial<T[K]> : T[K];
};

export type TVajraThemeProviderProps = {
  theme?: {
    light?: TDeepPartial<TVajraTheme>;
    dark?: TDeepPartial<TVajraTheme>;
  };
  colorScheme?: 'light' | 'dark' | 'unspecified' | null;
  children: React.ReactNode;
};

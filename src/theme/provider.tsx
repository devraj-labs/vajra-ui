import React, { createContext, useContext } from 'react';

import type { TVajraTheme, TVajraThemeProviderProps } from './provider-types';

import { darkColors } from './themes/dark';
import { lightColors } from './themes/light';
import { deepMerge } from '../utils/deep-merge';

const VajraThemeContext = createContext<TVajraTheme | null>(null);

export const ThemeProvider = ({
  theme: overrides,
  colorScheme,
  children,
}: TVajraThemeProviderProps) => {
  const baseMap: Record<'light' | 'dark', typeof lightColors> = {
    dark: darkColors,
    light: lightColors,
  };
  const scheme = colorScheme === 'dark' ? 'dark' : 'light';
  const base = baseMap[scheme];
  const schemeOverrides = overrides?.[scheme];
  const theme = schemeOverrides ? deepMerge(base, schemeOverrides) : base;

  return <VajraThemeContext.Provider value={theme}>{children}</VajraThemeContext.Provider>;
};

export const useTheme = (): TVajraTheme => {
  const theme = useContext(VajraThemeContext);
  if (!theme) throw new Error('useTheme must be used within a ThemeProvider');

  return theme;
};

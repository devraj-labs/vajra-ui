import React, { createContext, useContext, useMemo } from 'react';
import { useColorScheme } from 'react-native';

import type { TVajraTheme, TVajraThemeProviderProps } from './provider-types';

import { darkColors } from './themes/dark';
import { lightColors } from './themes/light';
import { deepMerge } from '../utils/deep-merge';

const VajraThemeContext = createContext<TVajraTheme | null>(null);

export function ThemeProvider({ theme: overrides, children }: TVajraThemeProviderProps) {
  const colorScheme = useColorScheme();
  const baseMap = { dark: darkColors, light: lightColors };
  const scheme = colorScheme ?? 'light';
  const base = baseMap[scheme];
  const schemeOverrides = overrides?.[scheme];
  const theme = useMemo(
    () => (schemeOverrides ? deepMerge(base, schemeOverrides) : base),
    [base, schemeOverrides],
  );

  return <VajraThemeContext.Provider value={theme}>{children}</VajraThemeContext.Provider>;
}

export function useTheme(): TVajraTheme {
  const theme = useContext(VajraThemeContext);
  if (!theme) throw new Error('useTheme must be used within a ThemeProvider');
  return theme;
}

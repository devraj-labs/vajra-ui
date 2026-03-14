import React, { createContext, useContext } from 'react';
import { useColorScheme } from 'react-native';

import type { TTheme, TThemeProviderProps } from './provider-types';

import { darkColors } from './themes/dark';
import { lightColors } from './themes/light';

const ThemeContext = createContext<TTheme | null>(null);

export function ThemeProvider({ children }: TThemeProviderProps) {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? darkColors : lightColors;

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}

export function useTheme(): TTheme {
  const theme = useContext(ThemeContext);
  if (!theme) throw new Error('useTheme must be used within a ThemeProvider');
  return theme;
}

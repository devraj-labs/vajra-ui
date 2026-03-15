import React, { createContext, useContext } from 'react';

import type { VajraTheme, TVajraThemeProviderProps } from './provider-types';

const VajraThemeContext = createContext<VajraTheme | null>(null);

export const ThemeProvider = ({ theme, children }: TVajraThemeProviderProps) => {
  return <VajraThemeContext.Provider value={theme}>{children}</VajraThemeContext.Provider>;
};

export const useTheme = <T extends VajraTheme = VajraTheme>(): T => {
  const theme = useContext(VajraThemeContext);
  if (!theme) throw new Error('useTheme must be used within a ThemeProvider');

  return theme as T;
};

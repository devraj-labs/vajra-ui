import React, { createContext, useContext } from 'react';
import { TTheme, defaultTheme } from './create-theme';

const ThemeContext = createContext<TTheme>(defaultTheme);

export function ThemeProvider({
  theme = defaultTheme,
  children,
}: {
  theme?: TTheme;
  children: React.ReactNode;
}) {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}

export function useTheme(): TTheme {
  return useContext(ThemeContext);
}

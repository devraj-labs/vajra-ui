import React, { createContext, useCallback, useContext, useState } from 'react';

import { TColorScheme, TThemePreset, buildTheme } from './theme-presets';

type TAppThemeContext = {
  preset: TThemePreset;
  colorScheme: TColorScheme;
  setPreset: (preset: TThemePreset) => void;
  setColorScheme: (colorScheme: TColorScheme) => void;
  theme: ReturnType<typeof buildTheme>;
};

const AppThemeContext = createContext<TAppThemeContext | null>(null);

export function AppThemeProvider({ children }: { children: React.ReactNode }) {
  const [preset, setPresetState] = useState<TThemePreset>('default');
  const [colorScheme, setColorSchemeState] = useState<TColorScheme>('light');

  const setPreset = useCallback((p: TThemePreset) => setPresetState(p), []);
  const setColorScheme = useCallback((s: TColorScheme) => setColorSchemeState(s), []);

  const theme = buildTheme(preset, colorScheme);

  return (
    <AppThemeContext.Provider value={{ preset, colorScheme, setPreset, setColorScheme, theme }}>
      {children}
    </AppThemeContext.Provider>
  );
}

export function useAppTheme() {
  const ctx = useContext(AppThemeContext);

  if (!ctx) {
    throw new Error('useAppTheme must be used within AppThemeProvider');
  }

  return ctx;
}

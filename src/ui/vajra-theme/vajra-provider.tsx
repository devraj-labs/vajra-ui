/**
 * VajraProvider
 *
 * Drop-in provider for vajra-theme. Wraps your app and makes all
 * vajra tokens available via `useVajraTheme()`.
 *
 * @example
 * // Basic usage — defaults to light theme
 * import { VajraProvider } from 'vajra-ui';
 *
 * <VajraProvider>
 *   <App />
 * </VajraProvider>
 *
 * @example
 * // Dark mode
 * <VajraProvider colorScheme="dark">
 *   <App />
 * </VajraProvider>
 *
 * @example
 * // Custom theme override (must match vajra token shape)
 * import { VajraProvider, defaultVajraTheme } from 'vajra-ui';
 *
 * const myTheme = { ...defaultVajraTheme.light, colors: { ...defaultVajraTheme.light.colors, primary: '#0055ff' } };
 *
 * <VajraProvider theme={myTheme}>
 *   <App />
 * </VajraProvider>
 */
import React from 'react';

import { ThemeProvider } from '../../theme';
import { defaultVajraTheme } from './vajra-theme';
import type { TDefaultVajraTheme } from './vajra-theme-types';

type TVajraColorScheme = 'light' | 'dark';

type TVajraProviderProps = {
  colorScheme?: TVajraColorScheme;
  theme?: TDefaultVajraTheme['light'] | TDefaultVajraTheme['dark'];
  children: React.ReactNode;
};

export const VajraProvider = ({ colorScheme = 'light', theme, children }: TVajraProviderProps) => {
  const resolvedTheme = theme ?? defaultVajraTheme[colorScheme];

  return <ThemeProvider theme={resolvedTheme}>{children}</ThemeProvider>;
};

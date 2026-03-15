import React from 'react';

/**
 * Pass your theme type to `useTheme` to get full autocomplete in your app.
 *
 * @example
 * export const theme = { colors: { primary: '#ff6b00' }, spacing: { sm: 8 } };
 * export type TAppTheme = typeof theme;
 * export const useAppTheme = () => useTheme<TAppTheme>();
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface, @typescript-eslint/consistent-type-definitions
export interface VajraTheme {}

export type TVajraThemeProviderProps = {
  theme: VajraTheme;
  children: React.ReactNode;
};

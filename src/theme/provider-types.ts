import React from 'react';

import { TextStyle } from 'react-native';

/**
 * Extend this interface in your app to get autocomplete across all components.
 *
 * @example
 * declare module 'vajra-ui' {
 *   interface VajraTheme extends typeof myTheme {}
 * }
 */
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export interface VajraTheme {
  colors: Record<string, string>;
  spacing: Record<string, number>;
  rounded: Record<string, number>;
  typography: Record<string, TextStyle>;
  layout: {
    screenPadding: number;
    gap: number;
  };
}

export type TVajraThemeProviderProps = {
  theme: VajraTheme;
  children: React.ReactNode;
};

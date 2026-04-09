import { plusFonts } from '@devraj-labs/rn-font-jakaratasans';
import { manropeFonts } from '@devraj-labs/rn-font-manrope';
import { newsreaderFonts } from '@devraj-labs/rn-font-newsreader';
import { createVajraTheme } from 'vajra-ui';

const appFonts = {
  ...plusFonts,
  ...manropeFonts,
  ...newsreaderFonts,
};

export type TColorScheme = 'light' | 'dark';
export type TThemePreset = 'default' | 'purple' | 'orange';

export const THEME_PRESET_LABELS: Record<TThemePreset, string> = {
  default: 'Teal (Default)',
  purple: 'Purple',
  orange: 'Orange',
};

const purpleColors = {
  primary: '#8B5CF6',
  primaryMuted: '#9D68F0',
  primarySubtle: '#F5F3FF',
  secondary: '#EC4899',
  secondaryMuted: '#F472B6',
  secondarySubtle: '#FDF2F8',
  borderFocus: '#9D68F0',
};

const purpleColorsDark = {
  primary: '#9D68F0',
  primaryMuted: '#8B5CF6',
  primarySubtle: '#4C1D95',
  secondary: '#F472B6',
  secondaryMuted: '#DB2777',
  secondarySubtle: '#831843',
  borderFocus: '#9D68F0',
};

const orangeColors = {
  primary: '#F97316',
  primaryMuted: '#FB923C',
  primarySubtle: '#FFF7ED',
  secondary: '#EF4444',
  secondaryMuted: '#F87171',
  secondarySubtle: '#FFF5F5',
  borderFocus: '#FB923C',
};

const orangeColorsDark = {
  primary: '#FB923C',
  primaryMuted: '#F97316',
  primarySubtle: '#7C2D12',
  secondary: '#F87171',
  secondaryMuted: '#DC2626',
  secondarySubtle: '#7F1D1D',
  borderFocus: '#FB923C',
};

export type TAppFonts = keyof typeof appFonts;

declare module 'vajra-ui' {
  interface IVajraFonts extends Record<TAppFonts, true> {}
}

const PRESET_COLORS: Record<
  TThemePreset,
  Record<TColorScheme, typeof purpleColors | undefined>
> = {
  default: { light: undefined, dark: undefined },
  purple: { light: purpleColors, dark: purpleColorsDark },
  orange: { light: orangeColors, dark: orangeColorsDark },
};

export const buildTheme = (preset: TThemePreset, colorScheme: TColorScheme) =>
  createVajraTheme({
    colorScheme,
    fonts: appFonts,
    colors: PRESET_COLORS[preset][colorScheme],
  });

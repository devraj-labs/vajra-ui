import { TVajraColors } from './colors';
import { defaultVajraTheme } from './vajra-theme';
import { TRoundedToken } from './tokens/rounded-tokens';
import { TSpacingToken } from './tokens/spacing-tokens';
import { TFontVariant, TFontVariantProps } from './tokens/font-tokens/index';

export type TFontWeightValue = '200' | '300' | '400' | '500' | '600' | '700' | '800';
export type TFontFamilyMap = Partial<Record<TFontWeightValue, string>>;
export type TFontFamilies = Record<string, TFontFamilyMap>;

// Augment this interface in your app to get font autocomplete on <Text font="..." />
// eslint-disable-next-line @typescript-eslint/no-empty-interface, @typescript-eslint/consistent-type-definitions
export interface IVajraFonts {}

export type TVajraColorOverrides = Partial<Record<TVajraColors, string>>;
export type TVajraSpacingOverrides = Partial<Record<TSpacingToken, number>>;
export type TVajraRoundedOverrides = Partial<Record<TRoundedToken, number>>;
export type TVajraTypographyOverrides = Partial<Record<TFontVariant, TFontVariantProps>>;
export type TVajraFontSizeOverrides = Record<string, number>;
export type TVajraLineHeightOverrides = Record<string, number>;

export type TVajraThemeWithFonts<F extends TFontFamilies> = (
  | typeof defaultVajraTheme.light
  | typeof defaultVajraTheme.dark
) & {
  fonts: F;
};

export const createVajraTheme = <F extends TFontFamilies>(config: {
  colorScheme?: 'light' | 'dark';
  fonts: F;
  colors?: TVajraColorOverrides;
  spacing?: TVajraSpacingOverrides;
  rounded?: TVajraRoundedOverrides;
  typography?: TVajraTypographyOverrides;
  fontSizes?: TVajraFontSizeOverrides;
  lineHeights?: TVajraLineHeightOverrides;
}): TVajraThemeWithFonts<F> => {
  const base = defaultVajraTheme[config.colorScheme ?? 'light'];

  return {
    ...base,
    colors: { ...base.colors, ...config.colors },
    spacing: { ...base.spacing, ...config.spacing },
    rounded: { ...base.rounded, ...config.rounded },
    typography: { ...base.typography, ...config.typography },
    fontSizes: { ...base.fontSizes, ...config.fontSizes },
    lineHeights: { ...base.lineHeights, ...config.lineHeights },
    fonts: config.fonts,
  } as TVajraThemeWithFonts<F>;
};

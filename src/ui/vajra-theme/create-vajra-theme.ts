import { TVajraColors } from './colors';
import { defaultVajraTheme } from './vajra-theme';
import { TRoundedToken } from './tokens/rounded-tokens';
import { TSpacingToken } from './tokens/spacing-tokens';

export type TFontWeightValue = '200' | '300' | '400' | '500' | '600' | '700' | '800';
export type TFontFamilyMap = Partial<Record<TFontWeightValue, string>>;
export type TFontFamilies = Record<string, TFontFamilyMap>;

// Augment this interface in your app to get font autocomplete on <Text font="..." />
// eslint-disable-next-line @typescript-eslint/no-empty-interface, @typescript-eslint/consistent-type-definitions
export interface IVajraFonts {}

export type TVajraColorOverrides = Partial<Record<TVajraColors, string>>;
export type TVajraSpacingOverrides = Partial<Record<TSpacingToken, number>>;
export type TVajraRoundedOverrides = Partial<Record<TRoundedToken, number>>;

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
}): TVajraThemeWithFonts<F> => {
  const base = defaultVajraTheme[config.colorScheme ?? 'light'];

  return {
    ...base,
    colors: { ...base.colors, ...config.colors },
    spacing: { ...base.spacing, ...config.spacing },
    rounded: { ...base.rounded, ...config.rounded },
    fonts: config.fonts,
  } as TVajraThemeWithFonts<F>;
};

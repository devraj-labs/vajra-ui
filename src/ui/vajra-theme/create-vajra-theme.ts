import { defaultVajraTheme } from './vajra-theme';

export type TFontWeightValue = '200' | '300' | '400' | '500' | '600' | '700' | '800';
export type TFontFamilyMap = Partial<Record<TFontWeightValue, string>>;
export type TFontFamilies = Record<string, TFontFamilyMap>;

// Augment this interface in your app to get font autocomplete on <Text font="..." />
// eslint-disable-next-line @typescript-eslint/no-empty-interface, @typescript-eslint/consistent-type-definitions
export interface IVajraFonts {}

export type TVajraThemeWithFonts<F extends TFontFamilies> = (
  | typeof defaultVajraTheme.light
  | typeof defaultVajraTheme.dark
) & {
  fonts: F;
};

export const createVajraTheme = <F extends TFontFamilies>(config: {
  colorScheme?: 'light' | 'dark';
  fonts: F;
}): TVajraThemeWithFonts<F> => {
  const base = defaultVajraTheme[config.colorScheme ?? 'light'];

  return { ...base, fonts: config.fonts } as TVajraThemeWithFonts<F>;
};

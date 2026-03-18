export type TBrandColorTokens = {
  primary: string;
  primaryMuted: string;
  primarySubtle: string;
  secondary: string;
  secondaryMuted: string;
  secondarySubtle: string;
};

export type TSurfaceColorTokens = {
  background: string;
  surfaceSunken: string;
  surface: string;
  surfaceRaised: string;
  surfaceOverlay: string;
  overlay: string;
};

export type TTextColorTokens = {
  text: string;
  textMuted: string;
  textInverse: string;
  textDisabled: string;
};

export type TBorderColorTokens = {
  border: string;
  borderStrong: string;
  borderFocus: string;
};

export type TFeedbackColorTokens = {
  error: string;
  errorMuted: string;
  errorSubtle: string;
  success: string;
  successMuted: string;
  successSubtle: string;
  warning: string;
  warningMuted: string;
  warningSubtle: string;
  info: string;
  infoMuted: string;
  infoSubtle: string;
};

export type TBaseColorTokens = {
  transparent: 'transparent';
};

export type TFlatColorTokens = TBrandColorTokens &
  TSurfaceColorTokens &
  TTextColorTokens &
  TBorderColorTokens &
  TFeedbackColorTokens &
  TBaseColorTokens;

export type TColorToken = keyof TFlatColorTokens;

export type TColorTokensBase = {
  brand: TBrandColorTokens;
  surface: TSurfaceColorTokens;
  typography: TTextColorTokens;
  border: TBorderColorTokens;
  feedback: TFeedbackColorTokens;
};

export type TColorTokens = TColorTokensBase & {
  flat: TFlatColorTokens;
};

export type TColorTheme = {
  colors: TColorTokens;
};

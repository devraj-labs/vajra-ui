export type TBrandColorTokens = {
  primary: string;
  primaryMuted: string;
  secondary: string;
  secondaryMuted: string;
};

export type TSurfaceColorTokens = {
  background: string;
  surface: string;
  surfaceRaised: string;
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
  success: string;
  successMuted: string;
  warning: string;
  warningMuted: string;
  info: string;
  infoMuted: string;
};

export type TColorTokens = {
  brand: TBrandColorTokens;
  surface: TSurfaceColorTokens;
  text: TTextColorTokens;
  border: TBorderColorTokens;
  feedback: TFeedbackColorTokens;
};

export type TColorTheme = {
  colors: TColorTokens;
};

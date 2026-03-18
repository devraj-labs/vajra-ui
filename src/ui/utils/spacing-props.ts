import { TSpacingToken, spacingTokens } from '../vajra-theme/tokens/spacing-tokens';

export type TSpacingProps = {
  m?: TSpacingToken;
  mx?: TSpacingToken;
  my?: TSpacingToken;
  mt?: TSpacingToken;
  mb?: TSpacingToken;
  ml?: TSpacingToken;
  mr?: TSpacingToken;
  p?: TSpacingToken;
  px?: TSpacingToken;
  py?: TSpacingToken;
  pt?: TSpacingToken;
  pb?: TSpacingToken;
  pl?: TSpacingToken;
  pr?: TSpacingToken;
  gap?: TSpacingToken;
};

type TSpacingValues = {
  m?: number;
  mx?: number;
  my?: number;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  p?: number;
  px?: number;
  py?: number;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
  gap?: number;
};

export const resolveSpacing = (props: TSpacingProps): TSpacingValues => ({
  m: props.m !== undefined ? spacingTokens[props.m] : undefined,
  mx: props.mx !== undefined ? spacingTokens[props.mx] : undefined,
  my: props.my !== undefined ? spacingTokens[props.my] : undefined,
  mt: props.mt !== undefined ? spacingTokens[props.mt] : undefined,
  mb: props.mb !== undefined ? spacingTokens[props.mb] : undefined,
  ml: props.ml !== undefined ? spacingTokens[props.ml] : undefined,
  mr: props.mr !== undefined ? spacingTokens[props.mr] : undefined,
  p: props.p !== undefined ? spacingTokens[props.p] : undefined,
  px: props.px !== undefined ? spacingTokens[props.px] : undefined,
  py: props.py !== undefined ? spacingTokens[props.py] : undefined,
  pt: props.pt !== undefined ? spacingTokens[props.pt] : undefined,
  pb: props.pb !== undefined ? spacingTokens[props.pb] : undefined,
  pl: props.pl !== undefined ? spacingTokens[props.pl] : undefined,
  pr: props.pr !== undefined ? spacingTokens[props.pr] : undefined,
  gap: props.gap !== undefined ? spacingTokens[props.gap] : undefined,
});

import { TSpacingToken } from '../vajra-theme/tokens/spacing-tokens';

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

export const resolveSpacing = (
  props: TSpacingProps,
  spacing: Partial<Record<string, number>>,
): TSpacingValues => ({
  m: props.m !== undefined ? spacing[props.m] : undefined,
  mx: props.mx !== undefined ? spacing[props.mx] : undefined,
  my: props.my !== undefined ? spacing[props.my] : undefined,
  mt: props.mt !== undefined ? spacing[props.mt] : undefined,
  mb: props.mb !== undefined ? spacing[props.mb] : undefined,
  ml: props.ml !== undefined ? spacing[props.ml] : undefined,
  mr: props.mr !== undefined ? spacing[props.mr] : undefined,
  p: props.p !== undefined ? spacing[props.p] : undefined,
  px: props.px !== undefined ? spacing[props.px] : undefined,
  py: props.py !== undefined ? spacing[props.py] : undefined,
  pt: props.pt !== undefined ? spacing[props.pt] : undefined,
  pb: props.pb !== undefined ? spacing[props.pb] : undefined,
  pl: props.pl !== undefined ? spacing[props.pl] : undefined,
  pr: props.pr !== undefined ? spacing[props.pr] : undefined,
  gap: props.gap !== undefined ? spacing[props.gap] : undefined,
});

import { TCorePressableProps } from '../../../core/pressable/pressable-types';
import { TColorToken } from '../../../vajra-theme/tokens/colors/types';
import { TRoundedToken } from '../../../vajra-theme/tokens/rounded-tokens';
import { TSpacingToken } from '../../../vajra-theme/tokens/spacing-tokens';

export type TUiPressableProps = Omit<
  TCorePressableProps,
  | 'bg'
  | 'borderColor'
  | 'rounded'
  | 'roundedT'
  | 'roundedB'
  | 'roundedL'
  | 'roundedR'
  | 'gap'
  | 'm'
  | 'mx'
  | 'my'
  | 'mt'
  | 'mb'
  | 'ml'
  | 'mr'
  | 'p'
  | 'px'
  | 'py'
  | 'pt'
  | 'pb'
  | 'pl'
  | 'pr'
> & {
  bg?: TColorToken;
  borderColor?: TColorToken;
  rounded?: TRoundedToken;
  roundedT?: TRoundedToken;
  roundedB?: TRoundedToken;
  roundedL?: TRoundedToken;
  roundedR?: TRoundedToken;
  gap?: TSpacingToken;
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
};

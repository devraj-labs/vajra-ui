import { TCoreTextInputProps } from '../../../core/core-text-input/core-text-input-types';
import { TColorToken } from '../../../vajra-theme/tokens/colors/types';
import { TRoundedToken } from '../../../vajra-theme/tokens/rounded-tokens';
import { TSpacingToken } from '../../../vajra-theme/tokens/spacing-tokens';

export type TUiTextInputProps = Omit<
  TCoreTextInputProps,
  | 'bg'
  | 'borderColor'
  | 'rounded'
  | 'color'
  | 'placeholderColor'
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
  color?: TColorToken;
  placeholderColor?: TColorToken;
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

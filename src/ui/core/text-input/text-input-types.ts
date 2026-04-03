import { TCoreTextInputProps } from '@vajra-ui/core';
import { TVajraColors } from '../../vajra-theme/colors';
import { TRoundedToken } from '../../vajra-theme/tokens/rounded-tokens';
import { TSpacingProps } from '../../utils/spacing-props';

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
> &
  TSpacingProps & {
    bg?: TVajraColors;
    borderColor?: TVajraColors;
    rounded?: TRoundedToken;
    color?: TVajraColors;
    placeholderColor?: TVajraColors;
  };

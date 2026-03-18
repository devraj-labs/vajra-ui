import { TCoreTextInputProps } from '../../../core/core-text-input/core-text-input-types';
import { TColorToken } from '../../vajra-theme/tokens/colors/types';
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
    bg?: TColorToken;
    borderColor?: TColorToken;
    rounded?: TRoundedToken;
    color?: TColorToken;
    placeholderColor?: TColorToken;
  };

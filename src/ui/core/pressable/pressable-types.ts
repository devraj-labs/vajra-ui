import { TCorePressableProps } from '../../../core/pressable/pressable-types';
import { TColorToken } from '../../vajra-theme/tokens/colors/types';
import { TRoundedToken } from '../../vajra-theme/tokens/rounded-tokens';
import { TSpacingProps } from '../../utils/spacing-props';

export type TUiPressableProps = Omit<
  TCorePressableProps,
  | 'bg'
  | 'borderColor'
  | 'rounded'
  | 'roundedT'
  | 'roundedB'
  | 'roundedL'
  | 'roundedR'
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
  | 'gap'
> &
  TSpacingProps & {
    bg?: TColorToken;
    borderColor?: TColorToken;
    rounded?: TRoundedToken;
    roundedT?: TRoundedToken;
    roundedB?: TRoundedToken;
    roundedL?: TRoundedToken;
    roundedR?: TRoundedToken;
  };

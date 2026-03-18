import { TColorToken } from '../../vajra-theme/tokens/colors/types';
import { TSeparatorOrientation, TSeparatorVariant } from '../../../core/separator/separator-types';

export type TUiSeparatorProps = {
  orientation?: TSeparatorOrientation;
  thickness?: number;
  color?: TColorToken;
  variant?: TSeparatorVariant;
};

import { TColorToken } from '../../vajra-theme/tokens/colors/types';
import { TSeparatorOrientation, TSeparatorVariant } from '@vajra-ui/core';

export type TUiSeparatorProps = {
  orientation?: TSeparatorOrientation;
  thickness?: number;
  color?: TColorToken;
  variant?: TSeparatorVariant;
};

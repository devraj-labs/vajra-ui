import { TButtonSize } from '../button/button-types';
import { TRoundedToken } from '../../vajra-theme/tokens/rounded-tokens';

export type TIconButtonSizeStyle = {
  size: number;
  iconSize: number;
  rounded: TRoundedToken;
};

export const ICON_BUTTON_SIZE_MAP: Record<TButtonSize, TIconButtonSizeStyle> = {
  xs: { size: 28, iconSize: 16, rounded: 'r-1' },
  sm: { size: 32, iconSize: 16, rounded: 'r-1' },
  md: { size: 40, iconSize: 24, rounded: 'r-2' },
  lg: { size: 48, iconSize: 28, rounded: 'r-2' },
  xl: { size: 56, iconSize: 32, rounded: 'r-3' },
};

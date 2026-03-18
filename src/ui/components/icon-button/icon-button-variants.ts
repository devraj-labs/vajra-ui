import { TButtonSize } from '../button/button-types';
import { TRoundedToken } from '../../../vajra-theme/tokens/rounded-tokens';

export type TIconButtonSizeStyle = {
  size: number;
  iconSize: number;
  rounded: TRoundedToken;
};

export const getIconButtonSizeStyle = (size: TButtonSize): TIconButtonSizeStyle => {
  switch (size) {
    case 'xs':
      return { size: 28, iconSize: 12, rounded: 'r-1' };
    case 'sm':
      return { size: 32, iconSize: 14, rounded: 'r-1' };
    case 'md':
      return { size: 40, iconSize: 16, rounded: 'r-2' };
    case 'lg':
      return { size: 48, iconSize: 20, rounded: 'r-2' };
    case 'xl':
      return { size: 56, iconSize: 24, rounded: 'r-3' };
  }
};

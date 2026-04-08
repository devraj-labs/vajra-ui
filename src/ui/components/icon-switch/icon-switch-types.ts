import { TVajraColors } from '../../vajra-theme/colors';
import { TRoundedToken } from '../../vajra-theme/tokens/rounded-tokens';
import { TVajraIconComponent } from '../icon-button/icon-button-types';

export type TIconSwitchProps = {
  value: boolean;
  onChange: (value: boolean) => void;

  offIcon: TVajraIconComponent;
  onIcon: TVajraIconComponent;

  // track (background container)
  trackBg?: TVajraColors;
  trackRounded?: TRoundedToken;

  // sliding selector box
  selectorBg?: TVajraColors;
  selectorRounded?: TRoundedToken;

  // icon colors
  activeIconColor?: TVajraColors;
  inactiveIconColor?: TVajraColors;

  isDisabled?: boolean;

  // size of each icon cell
  cellSize?: number;
  iconSize?: number;
};

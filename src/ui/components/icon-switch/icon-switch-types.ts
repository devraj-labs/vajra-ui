import { TVajraColors } from '../../vajra-theme/colors';
import { TVajraIconComponent } from '../icon-button/icon-button-types';

export type TIconSwitchProps = {
  value: boolean;
  onChange: (value: boolean) => void;

  // icons for off / on states
  offIcon?: TVajraIconComponent;
  onIcon?: TVajraIconComponent;

  // colors
  trackOnColor?: TVajraColors;
  trackOffColor?: TVajraColors;
  thumbColor?: TVajraColors;
  iconOnColor?: TVajraColors;
  iconOffColor?: TVajraColors;

  isDisabled?: boolean;

  // sizing
  trackWidth?: number;
  trackHeight?: number;
};

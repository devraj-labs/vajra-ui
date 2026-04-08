import { TVajraColors } from '../../vajra-theme/colors';
import { TRoundedToken } from '../../vajra-theme/tokens/rounded-tokens';
import { TSpacingToken } from '../../vajra-theme/tokens/spacing-tokens';

export type TTabBarTab = {
  value: string;
  label: string;
};

export type TTabBarProps = {
  tabs: TTabBarTab[];
  value: string;
  onChange: (value: string) => void;

  // track (container)
  trackBg?: TVajraColors;
  trackRounded?: TRoundedToken;
  trackPadding?: TSpacingToken;

  // active indicator pill
  indicatorBg?: TVajraColors;
  indicatorRounded?: TRoundedToken;

  // label colors
  activeColor?: TVajraColors;
  inactiveColor?: TVajraColors;

  // scrollable or equal-width
  scrollable?: boolean;
};

import { TVajraColors } from '../../vajra-theme/colors';
import { TRoundedToken } from '../../vajra-theme/tokens/rounded-tokens';
import { TSpacingToken } from '../../vajra-theme/tokens/spacing-tokens';
import { TTextProps } from '../../core/text';

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

  // label text props (excluding color, which is controlled by activeColor/inactiveColor)
  labelProps?: Omit<TTextProps, 'color'>;

  // scrollable or equal-width
  scrollable?: boolean;
};

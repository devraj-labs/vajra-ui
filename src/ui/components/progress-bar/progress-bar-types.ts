import { TVajraColors } from '../../vajra-theme/colors';
import { TRoundedToken } from '../../vajra-theme/tokens/rounded-tokens';

export type TProgressBarProps = {
  /** 0 to 1. Values outside this range are clamped. */
  value: number;
  height?: number;
  trackColor?: TVajraColors;
  fillColor?: TVajraColors;
  rounded?: TRoundedToken;
  /** Animate width changes. Defaults to true. */
  animated?: boolean;
  testID?: string;
};

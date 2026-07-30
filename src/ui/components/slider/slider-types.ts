import { TVajraColors } from '../../vajra-theme/colors';

export type TSliderProps = {
  /** Controlled value, between min and max. */
  value: number;
  onChange: (value: number) => void;
  /** Called once when a drag gesture ends, with the final value. */
  onSlidingComplete?: (value: number) => void;

  min?: number;
  max?: number;
  step?: number;

  isDisabled?: boolean;

  trackHeight?: number;
  thumbSize?: number;
  trackColor?: TVajraColors;
  fillColor?: TVajraColors;
  thumbColor?: TVajraColors;

  testID?: string;
};

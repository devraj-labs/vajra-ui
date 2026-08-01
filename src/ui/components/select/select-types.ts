import { TVajraIconComponent } from '../icon-button/icon-button-types';
import { TVajraColors } from '../../vajra-theme/colors';

export type TSelectOption<TValue extends string = string> = {
  label: string;
  value: TValue;
};

export type TSelectProps<TValue extends string = string> = {
  options: TSelectOption<TValue>[];
  value?: TValue;
  onChange: (value: TValue) => void;

  placeholder?: string;
  label?: string;
  errorText?: string;
  isInvalid?: boolean;
  isDisabled?: boolean;

  selectedColor?: TVajraColors;

  /** Icon shown at the trailing edge, rotated/swapped between open and closed state. Defaults to a plain ▲/▼ glyph. */
  icon?: TVajraIconComponent;
  /** Icon shown next to the selected option in the list. Defaults to a plain ✓ glyph. */
  checkIcon?: TVajraIconComponent;

  testID?: string;
};

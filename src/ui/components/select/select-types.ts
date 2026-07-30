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

  testID?: string;
};

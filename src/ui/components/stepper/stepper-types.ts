import { TVajraColors } from '../../vajra-theme/colors';

export type TStepperProps = {
  value: number;
  onChange: (value: number) => void;

  min?: number;
  max?: number;
  step?: number;

  isDisabled?: boolean;

  buttonBg?: TVajraColors;
  buttonColor?: TVajraColors;

  testID?: string;
};

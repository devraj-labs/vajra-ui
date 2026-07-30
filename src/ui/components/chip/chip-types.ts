import { TVajraColors } from '../../vajra-theme/colors';

export type TChipProps = {
  label: string;
  isSelected?: boolean;
  onPress?: () => void;
  onRemove?: () => void;
  isDisabled?: boolean;

  selectedBg?: TVajraColors;
  selectedColor?: TVajraColors;
  unselectedBg?: TVajraColors;
  unselectedColor?: TVajraColors;

  testID?: string;
};

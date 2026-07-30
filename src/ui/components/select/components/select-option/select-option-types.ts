import { TVajraColors } from '../../../../vajra-theme/colors';

export type TSelectOptionProps = {
  label: string;
  isSelected: boolean;
  onPress: () => void;
  selectedColor?: TVajraColors;
  testID?: string;
};

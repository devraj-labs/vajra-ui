import { TVajraColors } from '../../../../vajra-theme/colors';
import { TVajraIconComponent } from '../../../icon-button/icon-button-types';

export type TSelectOptionProps = {
  label: string;
  isSelected: boolean;
  onPress: () => void;
  selectedColor?: TVajraColors;
  checkIcon?: TVajraIconComponent;
  testID?: string;
};

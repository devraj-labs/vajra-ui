import { TVajraIconComponent } from '../icon-button/icon-button-types';
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

  /** Icon shown in the remove button, when `onRemove` is set. Defaults to a plain ✕ glyph. */
  removeIcon?: TVajraIconComponent;

  testID?: string;
};

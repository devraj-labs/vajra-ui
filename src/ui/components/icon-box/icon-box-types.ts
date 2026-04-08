import { TUiBoxProps } from '../../core/box';
import { TVajraColors } from '../../vajra-theme/colors';
import { TVajraIconComponent } from '../icon-button/icon-button-types';

export type TIconBoxProps = Omit<TUiBoxProps, 'children'> & {
  icon: TVajraIconComponent;
  iconSize?: number;
  iconColor?: TVajraColors;
};

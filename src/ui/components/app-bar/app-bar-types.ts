import { ReactElement, ReactNode } from 'react';
import { ViewStyle } from 'react-native';

import { TVajraColors } from '../../vajra-theme/colors';
import { TVajraIconComponent } from '../icon-button/icon-button-types';

export type TSlotChild = ReactElement | null;

export type TAppBarHeaderProps = {
  children: ReactNode;
  style?: ViewStyle;
  contentStyle?: ViewStyle;
  height?: number;
  useSafeArea?: boolean;
  bg?: TVajraColors;
  tint?: TVajraColors;
};

export type TAppBarTitleProps = {
  children: ReactNode;
  centered?: boolean;
};

export type TAppBarBackActionProps = {
  onPress?: () => void;
  icon: TVajraIconComponent;
};

export type TAppBarIconButtonProps = {
  icon: TVajraIconComponent;
  onPress?: () => void;
  accessibilityLabel?: string;
};

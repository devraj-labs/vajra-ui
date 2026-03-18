import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { TColorPalette } from '../../utils/palette';

export type TButtonVariant = 'solid' | 'subtle' | 'surface' | 'outline' | 'ghost' | 'plain';

export type TButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type TButtonColorPalette = TColorPalette;

export type TButtonLoadingPosition = 'start' | 'end';

export type TButtonLoadingProps = {
  position?: TButtonLoadingPosition;
  label?: string;
  loader?: React.ReactNode;
};

export type TButtonProps = Omit<TouchableOpacityProps, 'style'> & {
  variant?: TButtonVariant;
  size?: TButtonSize;
  colorPalette?: TButtonColorPalette;
  label: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  loading?: TButtonLoadingProps;
};

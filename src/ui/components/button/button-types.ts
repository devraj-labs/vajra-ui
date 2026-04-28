import React from 'react';

import { TUiPressableProps } from '../../core/pressable/pressable-types';
import { TTextProps } from '../../core/text/text-types';
import { TButtonSize, TButtonVariant } from './button-variants';

export type { TButtonSize, TButtonVariant };

export type TButtonLoadingPosition = 'start' | 'end';

export type TButtonLoadingProps = {
  position?: TButtonLoadingPosition;
  label?: string;
  loader?: React.ReactNode;
};

export type TButtonProps = Omit<TUiPressableProps, 'disabled'> & {
  variant?: TButtonVariant;
  size?: TButtonSize;
  label: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  isPill?: boolean;
  loading?: TButtonLoadingProps;
  labelProps?: Omit<TTextProps, 'color' | 'variant'>;
};

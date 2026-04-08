import React from 'react';

import { TUiPressableProps } from '../../core/pressable/pressable-types';
import { TButtonRecipeVariants, TButtonSize, TButtonVariant } from './button-variants';

export type { TButtonSize, TButtonVariant };

export type TButtonLoadingPosition = 'start' | 'end';

export type TButtonLoadingProps = {
  position?: TButtonLoadingPosition;
  label?: string;
  loader?: React.ReactNode;
};

export type TButtonProps = Omit<TUiPressableProps, 'disabled'> &
  TButtonRecipeVariants & {
    label: string;
    isDisabled?: boolean;
    isLoading?: boolean;
    isPill?: boolean;
    loading?: TButtonLoadingProps;
  };

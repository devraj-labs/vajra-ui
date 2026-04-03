import React from 'react';
import { PressableProps } from 'react-native';

import { TButtonRecipeVariants } from './button-variants';

export type TButtonVariant = NonNullable<TButtonRecipeVariants['variant']>;
export type TButtonSize = NonNullable<TButtonRecipeVariants['size']>;

export type TButtonLoadingPosition = 'start' | 'end';

export type TButtonLoadingProps = {
  position?: TButtonLoadingPosition;
  label?: string;
  loader?: React.ReactNode;
};

export type TButtonProps = Omit<PressableProps, 'style'> &
  TButtonRecipeVariants & {
    label: string;
    isDisabled?: boolean;
    isLoading?: boolean;
    loading?: TButtonLoadingProps;
  };

import React, { memo } from 'react';

import { Pressable } from '../../core/pressable';
import { Spinner } from '../spinner';
import { Text } from '../../core/text';
import { TButtonProps } from './button-types';
import { buttonRecipe } from './button-variants';

const ButtonComponent: React.FC<TButtonProps> = ({
  variant = 'solid',
  size = 'md',
  label,
  isDisabled = false,
  isLoading = false,
  loading,
  ...rest
}) => {
  const { variant: v, size: s } = buttonRecipe({ variant, size });
  const container = { ...s.container, ...v.container };
  const labelStyle = { ...s.label, ...v.label };

  const loadingPosition = loading?.position ?? 'start';
  const isInteractionDisabled = isDisabled || isLoading;
  const displayLabel = isLoading && loading?.label ? loading.label : label;

  const spinner = loading?.loader ?? <Spinner size={s.spinner.size} color={labelStyle.color} />;

  return (
    <Pressable
      disabled={isInteractionDisabled}
      bg={container.backgroundColor}
      px={container.px}
      py={container.py}
      rounded={container.rounded}
      opacity={isDisabled ? 0.4 : 1}
      align="center"
      justify="center"
      direction="row"
      gap="s-2"
      {...rest}
    >
      {isLoading && loadingPosition === 'start' && spinner}
      <Text variant={labelStyle.fontVariant} color={labelStyle.color}>
        {displayLabel}
      </Text>
      {isLoading && loadingPosition === 'end' && spinner}
    </Pressable>
  );
};

export const Button = memo(ButtonComponent);
Button.displayName = 'Button';

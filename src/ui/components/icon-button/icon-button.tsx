import React, { memo } from 'react';

import { Pressable } from '../../core/pressable';
import { Spinner } from '../spinner';
import { useVajraTheme } from '../../vajra-theme/use-vajra-theme';
import { TIconButtonProps } from './icon-button-types';
import { iconButtonRecipe } from './icon-button-variants';

const IconButtonComponent: React.FC<TIconButtonProps> = ({
  variant = 'solid',
  size = 'md',
  icon: Icon,
  isDisabled = false,
  isLoading = false,
  loading,
  ...rest
}) => {
  const { colors } = useVajraTheme();
  const { variant: v, size: s } = iconButtonRecipe({ variant, size });
  const container = { ...s.container, ...v.container };
  const label = { ...v.label };

  const textColor = label.color ? colors[label.color] : colors.text;

  const isInteractionDisabled = isDisabled || isLoading;

  const spinner = loading?.loader ?? <Spinner size={s.spinner.size} color={label.color} />;

  return (
    <Pressable
      disabled={isInteractionDisabled}
      bg={container.backgroundColor}
      rounded={container.rounded}
      opacity={isDisabled ? 0.4 : 1}
      style={{ width: container.size, height: container.size }}
      align="center"
      justify="center"
      {...rest}
    >
      {isLoading ? spinner : <Icon size={s.icon.size} color={textColor} />}
    </Pressable>
  );
};

export const IconButton = memo(IconButtonComponent);
IconButton.displayName = 'IconButton';

import React, { memo } from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';

import { useVajraTheme } from '../../vajra-theme/use-vajra-theme';
import { Box } from '../box';
import { Text } from '../text';
import { TButtonProps } from './button-types';
import { getButtonSizeStyle, getButtonVariantStyle } from './button-variants';

const ButtonComponent: React.FC<TButtonProps> = ({
  variant = 'solid',
  size = 'md',
  colorPalette,
  label,
  isDisabled = false,
  isLoading = false,
  loading,
  ...rest
}) => {
  const theme = useVajraTheme();
  const variantStyle = getButtonVariantStyle(variant, theme.colors, colorPalette);
  const sizeStyle = getButtonSizeStyle(size);

  const loadingPosition = loading?.position ?? 'start';
  const isInteractionDisabled = isDisabled || isLoading;
  const displayLabel = isLoading && loading?.label ? loading.label : label;

  const spinner = loading?.loader ?? (
    <ActivityIndicator size={sizeStyle.spinnerSize} color={variantStyle.textColor} />
  );

  return (
    <TouchableOpacity disabled={isInteractionDisabled} {...rest}>
      <Box
        style={{
          backgroundColor: variantStyle.bg,
          borderColor: variantStyle.borderColor,
          opacity: isDisabled ? 0.4 : 1,
        }}
        borderWidth={variantStyle.borderWidth}
        rounded={sizeStyle.rounded}
        px={sizeStyle.px}
        py={sizeStyle.py}
        align="center"
        justify="center"
        direction="row"
        gap="s-2"
      >
        {isLoading && loadingPosition === 'start' && spinner}
        <Text variant={sizeStyle.fontVariant} color={variantStyle.textColor}>
          {displayLabel}
        </Text>
        {isLoading && loadingPosition === 'end' && spinner}
      </Box>
    </TouchableOpacity>
  );
};

export const Button = memo(ButtonComponent);
Button.displayName = 'Button';

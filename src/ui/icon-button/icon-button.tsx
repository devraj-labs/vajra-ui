import React, { memo } from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';

import { useVajraTheme } from '../../vajra-theme/use-vajra-theme';
import { Box } from '../box';
import { getButtonVariantStyle } from '../button/button-variants';
import { TIconButtonProps } from './icon-button-types';
import { getIconButtonSizeStyle } from './icon-button-variants';

const IconButtonComponent: React.FC<TIconButtonProps> = ({
  variant = 'solid',
  size = 'md',
  colorPalette,
  icon: Icon,
  isDisabled = false,
  isLoading = false,
  loading,
  ...rest
}) => {
  const theme = useVajraTheme();
  const variantStyle = getButtonVariantStyle(variant, theme.colors, colorPalette);
  const sizeStyle = getIconButtonSizeStyle(size);

  const isInteractionDisabled = isDisabled || isLoading;

  const spinner = loading?.loader ?? (
    <ActivityIndicator size={sizeStyle.iconSize} color={variantStyle.textColor} />
  );

  return (
    <TouchableOpacity disabled={isInteractionDisabled} {...rest}>
      <Box
        style={{
          backgroundColor: variantStyle.bg,
          borderColor: variantStyle.borderColor,
          opacity: isDisabled ? 0.4 : 1,
          width: sizeStyle.size,
          height: sizeStyle.size,
        }}
        borderWidth={variantStyle.borderWidth}
        rounded={sizeStyle.rounded}
        align="center"
        justify="center"
      >
        {isLoading ? spinner : <Icon size={sizeStyle.iconSize} color={variantStyle.textColor} />}
      </Box>
    </TouchableOpacity>
  );
};

export const IconButton = memo(IconButtonComponent);
IconButton.displayName = 'IconButton';

import React, { memo } from 'react';

import { Box } from '../../../../core/box';
import { Text } from '../../../../core/text';
import { TOAST_VARIANT_COLORS } from '../../toast-constants';
import { TToastItemProps } from './toast-item-types';

const ToastItemComponent: React.FC<TToastItemProps> = ({
  message,
  variant = 'default',
  testID,
}) => {
  const { bg, text } = TOAST_VARIANT_COLORS[variant];

  return (
    <Box testID={testID} bg={bg} rounded="r-3" px="s-4" py="s-3">
      <Text color={text} variant="bodyMedium">
        {message}
      </Text>
    </Box>
  );
};

export const ToastItem = memo(ToastItemComponent);
ToastItem.displayName = 'ToastItem';

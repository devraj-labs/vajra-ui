import React, { memo } from 'react';

import { Text } from '../../core/text';
import { useVajraTheme } from '../../vajra-theme/use-vajra-theme';
import { TTextVariantProps } from './text-variants-types';

export const TextVariant = memo(({ variant = 'body', color, ...rest }: TTextVariantProps) => {
  const theme = useVajraTheme();
  const fontStyle = theme.typography[variant];

  return (
    <Text
      fontSize={fontStyle.fontSize}
      lineHeight={fontStyle.lineHeight}
      fontWeight={fontStyle.fontWeight}
      color={color ?? theme.colors.text}
      {...rest}
    />
  );
});

TextVariant.displayName = 'TextVariant';

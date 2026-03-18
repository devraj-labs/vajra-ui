import React, { memo } from 'react';

import { useVajraTheme } from '../../vajra-theme/use-vajra-theme';
import { TTextVariantProps } from './text-types';
import { CoreText } from '../../core/core-text';

export const Text = memo(({ variant = 'body', color, ...rest }: TTextVariantProps) => {
  const theme = useVajraTheme();
  const fontStyle = theme.typography[variant];

  return (
    <CoreText
      fontSize={fontStyle.fontSize}
      lineHeight={fontStyle.lineHeight}
      fontWeight={fontStyle.fontWeight}
      color={color ?? theme.colors.text}
      {...rest}
    />
  );
});

Text.displayName = 'TextVariant';

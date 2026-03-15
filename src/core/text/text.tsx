import React, { memo } from 'react';
import { Text as RNText } from 'react-native';

import { TTextProps } from './text-types';

export const Text = memo(
  ({
    style,
    children,
    fontSize,
    lineHeight,
    fontWeight,
    fontFamily,
    letterSpacing,
    color,
    align,
    decoration,
    transform,
    ...rest
  }: TTextProps) => (
    <RNText
      style={[
        {
          fontSize,
          lineHeight,
          fontWeight,
          fontFamily,
          letterSpacing,
          color,
          textAlign: align,
          textDecorationLine: decoration,
          textTransform: transform,
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </RNText>
  ),
);

Text.displayName = 'Text';

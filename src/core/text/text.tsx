import React, { memo } from 'react';
import { Text as RNText } from 'react-native';
import { useTheme } from '../../theme';
import { TTextProps } from './text-types';

export const Text = memo(
  ({ style, children, variant, color, align, decoration, transform, ...rest }: TTextProps) => {
    const { font: fontTokens, colors } = useTheme();

    return (
      <RNText
        style={[
          variant && fontTokens[variant],
          {
            color: color ? colors.flat[color] : colors.typography.text,
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
    );
  },
);

Text.displayName = 'Text';

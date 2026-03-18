import React, { memo } from 'react';

import { CoreText } from '../../../core/core-text';
import { useVajraTheme } from '../../../vajra-theme/use-vajra-theme';
import { resolveSpacing } from '../../utils/spacing-props';
import { TTextProps } from './text-types';

export const Text = memo(
  ({ variant = 'body', color, m, mx, my, mt, mb, ml, mr, style, ...rest }: TTextProps) => {
    const theme = useVajraTheme();
    const fontStyle = theme.typography[variant];
    const {
      m: margin,
      mx: marginH,
      my: marginV,
      mt: marginT,
      mb: marginB,
      ml: marginL,
      mr: marginR,
    } = resolveSpacing({ m, mx, my, mt, mb, ml, mr });

    return (
      <CoreText
        fontSize={fontStyle.fontSize}
        lineHeight={fontStyle.lineHeight}
        fontWeight={fontStyle.fontWeight}
        color={color !== undefined ? theme.colors[color] : theme.colors.text}
        style={[
          {
            margin,
            marginHorizontal: marginH,
            marginVertical: marginV,
            marginTop: marginT,
            marginBottom: marginB,
            marginLeft: marginL,
            marginRight: marginR,
          },
          ...(Array.isArray(style) ? style : style ? [style] : []),
        ]}
        {...rest}
      />
    );
  },
);

Text.displayName = 'TextVariant';

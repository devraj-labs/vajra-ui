import React, { memo } from 'react';

import { CoreText } from '@devraj-labs/vajra-ui-core';
import { useVajraTheme } from '../../vajra-theme/use-vajra-theme';
import { resolveSpacing } from '../../utils/spacing-props';
import { TTextProps } from './text-types';

export const Text = memo(
  ({
    variant = 'body',
    fontSize,
    lineHeight,
    font,
    fontWeight = '400',
    color,
    m,
    mx,
    my,
    mt,
    mb,
    ml,
    mr,
    style,
    ...rest
  }: TTextProps) => {
    const theme = useVajraTheme();
    const fontVariantStyle = theme.typography[variant];
    const resolvedFontFamily =
      font != null
        ? (theme as unknown as { fonts: Record<string, Record<string, string>> }).fonts?.[font]?.[
            fontWeight
          ]
        : undefined;
    const {
      m: margin,
      mx: marginH,
      my: marginV,
      mt: marginT,
      mb: marginB,
      ml: marginL,
      mr: marginR,
    } = resolveSpacing({ m, mx, my, mt, mb, ml, mr }, theme.spacing);

    return (
      <CoreText
        fontSize={fontSize != null ? theme.fontSizes[fontSize] : fontVariantStyle.fontSize}
        lineHeight={
          lineHeight ??
          (fontSize != null ? theme.lineHeights[fontSize] : fontVariantStyle.lineHeight)
        }
        fontWeight={resolvedFontFamily != null ? undefined : fontVariantStyle.fontWeight}
        fontFamily={resolvedFontFamily}
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

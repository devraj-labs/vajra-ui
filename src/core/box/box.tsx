import React, { memo } from 'react';
import { View } from 'react-native';

import { TBoxProps } from './box-types';

export const Box = memo(
  ({
    style,
    children,
    w,
    h,
    minW,
    maxW,
    minH,
    maxH,
    bg,
    borderWidth,
    borderTopWidth,
    borderBottomWidth,
    borderLeftWidth,
    borderRightWidth,
    borderColor,
    rounded,
    roundedT,
    roundedB,
    roundedL,
    roundedR,
    align,
    justify,
    gap,
    flex,
    direction,
    wrap,
    m,
    mx,
    my,
    mt,
    mb,
    ml,
    mr,
    p,
    px,
    py,
    pt,
    pb,
    pl,
    pr,
    ...rest
  }: TBoxProps) => {
    const borderTopLeftRadius = roundedT ?? roundedL;
    const borderTopRightRadius = roundedT ?? roundedR;
    const borderBottomLeftRadius = roundedB ?? roundedL;
    const borderBottomRightRadius = roundedB ?? roundedR;

    return (
      <View
        style={[
          {
            width: w,
            height: h,
            minWidth: minW,
            maxWidth: maxW,
            minHeight: minH,
            maxHeight: maxH,
            backgroundColor: bg,
            borderColor,
            borderWidth,
            borderTopWidth,
            borderBottomWidth,
            borderLeftWidth,
            borderRightWidth,
            borderRadius: rounded,
            borderTopLeftRadius,
            borderTopRightRadius,
            borderBottomLeftRadius,
            borderBottomRightRadius,
            flexDirection: direction,
            alignItems: align,
            justifyContent: justify,
            gap,
            flex,
            flexWrap: wrap,
            margin: m,
            marginHorizontal: mx,
            marginVertical: my,
            marginTop: mt,
            marginBottom: mb,
            marginLeft: ml,
            marginRight: mr,
            padding: p,
            paddingHorizontal: px,
            paddingVertical: py,
            paddingTop: pt,
            paddingBottom: pb,
            paddingLeft: pl,
            paddingRight: pr,
          },
          style,
        ]}
        {...rest}
      >
        {children}
      </View>
    );
  },
);

Box.displayName = 'Box';

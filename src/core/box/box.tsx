import React, { memo } from 'react';
import { View } from 'react-native';

import { buildBoxStyle } from './build-box-style';
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
    borderColor,
    borderWidth,
    borderTopWidth,
    borderBottomWidth,
    borderLeftWidth,
    borderRightWidth,
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
    return (
      <View
        style={[
          buildBoxStyle({
            w,
            h,
            minW,
            maxW,
            minH,
            maxH,
            bg,
            borderColor,
            borderWidth,
            borderTopWidth,
            borderBottomWidth,
            borderLeftWidth,
            borderRightWidth,
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
          }),
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

import React, { memo } from 'react';
import { Pressable as RNPressable } from 'react-native';

import { buildBoxStyle } from '../box/build-box-style';
import { TCorePressableProps } from './pressable-types';

export const CorePressable = memo(
  ({
    style,
    children,
    opacity,
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
  }: TCorePressableProps) => {
    const boxStyleProps = {
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
    };

    return (
      <RNPressable
        style={({ pressed }) => [
          buildBoxStyle(boxStyleProps),
          { opacity: pressed ? (opacity ?? 0.7) : 1 },
          style,
        ]}
        {...rest}
      >
        {children}
      </RNPressable>
    );
  },
);

CorePressable.displayName = 'CorePressable';

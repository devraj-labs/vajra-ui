import React, { memo } from 'react';
import { View } from 'react-native';
import { useTheme } from '../../theme';
import { TBoxProps } from './box-types';

export const Box = memo(({
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
  const { spacing, rounded: r, colors } = useTheme();

  const allColors = {
    ...colors.brand,
    ...colors.surface,
    ...colors.text,
    ...colors.border,
    ...colors.feedback,
  };

  const borderTopLeftRadius = roundedT ? r[roundedT] : roundedL ? r[roundedL] : undefined;
  const borderTopRightRadius = roundedT ? r[roundedT] : roundedR ? r[roundedR] : undefined;
  const borderBottomLeftRadius = roundedB ? r[roundedB] : roundedL ? r[roundedL] : undefined;
  const borderBottomRightRadius = roundedB ? r[roundedB] : roundedR ? r[roundedR] : undefined;

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
          backgroundColor: bg ? allColors[bg] : undefined,
          borderColor: borderColor ? allColors[borderColor] : undefined,
          borderWidth,
          borderTopWidth,
          borderBottomWidth,
          borderLeftWidth,
          borderRightWidth,
          borderRadius: rounded ? r[rounded] : undefined,
          borderTopLeftRadius,
          borderTopRightRadius,
          borderBottomLeftRadius,
          borderBottomRightRadius,
          flexDirection: direction,
          alignItems: align,
          justifyContent: justify,
          gap: gap ? spacing[gap] : undefined,
          flex,
          flexWrap: wrap,
          margin: m ? spacing[m] : undefined,
          marginHorizontal: mx ? spacing[mx] : undefined,
          marginVertical: my ? spacing[my] : undefined,
          marginTop: mt ? spacing[mt] : undefined,
          marginBottom: mb ? spacing[mb] : undefined,
          marginLeft: ml ? spacing[ml] : undefined,
          marginRight: mr ? spacing[mr] : undefined,
          padding: p ? spacing[p] : undefined,
          paddingHorizontal: px ? spacing[px] : undefined,
          paddingVertical: py ? spacing[py] : undefined,
          paddingTop: pt ? spacing[pt] : undefined,
          paddingBottom: pb ? spacing[pb] : undefined,
          paddingLeft: pl ? spacing[pl] : undefined,
          paddingRight: pr ? spacing[pr] : undefined,
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </View>
  );
});

Box.displayName = 'Box';

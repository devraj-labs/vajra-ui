import React, { memo } from 'react';
import { View } from 'react-native';
import { useTheme } from '../../theme';
import { TBoxProps } from './box-types';

const BoxComponent: React.FC<TBoxProps> = ({
  style,
  children,
  width,
  height,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  backgroundColor,
  borderColor,
  borderWidth,
  br,
  align,
  justify,
  gap,
  flex,
  flexDirection,
  flexWrap,
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
}) => {
  const { tokens } = useTheme();
  const { colors, spacing, rounded } = tokens;

  return (
    <View
      style={[
        {
          width,
          height,
          minWidth,
          maxWidth,
          minHeight,
          maxHeight,
          backgroundColor: backgroundColor ? colors[backgroundColor] : undefined,
          borderColor: borderColor ? colors[borderColor] : undefined,
          borderWidth,
          borderRadius: br ? rounded[br] : undefined,
          flexDirection,
          alignItems: align,
          justifyContent: justify,
          gap: gap ? spacing[gap] : undefined,
          flex,
          flexWrap,
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
      {...rest}>
      {children}
    </View>
  );
};

export const Box = memo(BoxComponent);

import React, { memo } from 'react';
import { TextInput } from 'react-native';

import { buildBoxStyle } from '../box/build-box-style';
import { TCoreTextInputProps } from './core-text-input-types';

export const CoreTextInput = memo(
  ({
    style,
    w,
    h,
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
    bg,
    borderWidth,
    borderColor,
    rounded,
    color,
    fontSize,
    lineHeight,
    fontWeight,
    letterSpacing,
    placeholderColor,
    ...rest
  }: TCoreTextInputProps) => {
    return (
      <TextInput
        placeholderTextColor={placeholderColor}
        style={[
          buildBoxStyle({
            w,
            h,
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
            bg,
            borderWidth,
            borderColor,
            rounded,
          }),
          { color, fontSize, lineHeight, fontWeight, letterSpacing },
          style,
        ]}
        {...rest}
      />
    );
  },
);

CoreTextInput.displayName = 'CoreTextInput';

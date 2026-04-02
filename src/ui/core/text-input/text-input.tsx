import React, { forwardRef, memo } from 'react';
import { TextInput as RNTextInput } from 'react-native';

import { CoreTextInput } from '@vajra-ui/core';
import { useVajraTheme } from '../../vajra-theme/use-vajra-theme';
import { resolveSpacing } from '../../utils/spacing-props';
import { TUiTextInputProps } from './text-input-types';

const TextInputComponent = forwardRef<RNTextInput, TUiTextInputProps>(
  (
    {
      bg,
      borderColor,
      rounded,
      color,
      placeholderColor,
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
      gap,
      ...rest
    },
    ref,
  ) => {
    const { colors, rounded: r } = useVajraTheme();
    const spacing = resolveSpacing({ m, mx, my, mt, mb, ml, mr, p, px, py, pt, pb, pl, pr, gap });

    return (
      <CoreTextInput
        ref={ref}
        bg={bg !== undefined ? colors[bg] : undefined}
        borderColor={borderColor !== undefined ? colors[borderColor] : undefined}
        rounded={rounded !== undefined ? r[rounded] : undefined}
        color={color !== undefined ? colors[color] : undefined}
        placeholderColor={placeholderColor !== undefined ? colors[placeholderColor] : undefined}
        {...spacing}
        {...rest}
      />
    );
  },
);

TextInputComponent.displayName = 'TextInput';

export const TextInput = memo(TextInputComponent);

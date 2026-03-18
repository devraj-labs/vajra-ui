import React, { memo } from 'react';

import { CoreTextInput } from '../../../core/core-text-input';
import { useVajraTheme } from '../../../vajra-theme/use-vajra-theme';
import { TUiTextInputProps } from './text-input-types';

const TextInputComponent: React.FC<TUiTextInputProps> = ({
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
  ...rest
}) => {
  const { colors, spacing, rounded: r } = useVajraTheme();

  return (
    <CoreTextInput
      bg={bg !== undefined ? colors[bg] : undefined}
      borderColor={borderColor !== undefined ? colors[borderColor] : undefined}
      rounded={rounded !== undefined ? r[rounded] : undefined}
      color={color !== undefined ? colors[color] : undefined}
      placeholderColor={placeholderColor !== undefined ? colors[placeholderColor] : undefined}
      m={m !== undefined ? spacing[m] : undefined}
      mx={mx !== undefined ? spacing[mx] : undefined}
      my={my !== undefined ? spacing[my] : undefined}
      mt={mt !== undefined ? spacing[mt] : undefined}
      mb={mb !== undefined ? spacing[mb] : undefined}
      ml={ml !== undefined ? spacing[ml] : undefined}
      mr={mr !== undefined ? spacing[mr] : undefined}
      p={p !== undefined ? spacing[p] : undefined}
      px={px !== undefined ? spacing[px] : undefined}
      py={py !== undefined ? spacing[py] : undefined}
      pt={pt !== undefined ? spacing[pt] : undefined}
      pb={pb !== undefined ? spacing[pb] : undefined}
      pl={pl !== undefined ? spacing[pl] : undefined}
      pr={pr !== undefined ? spacing[pr] : undefined}
      {...rest}
    />
  );
};

export const TextInput = memo(TextInputComponent);
TextInput.displayName = 'TextInput';

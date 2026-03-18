import React, { memo } from 'react';

import { CorePressable } from '../../../core/pressable';
import { useVajraTheme } from '../../../vajra-theme/use-vajra-theme';
import { TUiPressableProps } from './pressable-types';

const PressableComponent: React.FC<TUiPressableProps> = ({
  bg,
  borderColor,
  rounded,
  roundedT,
  roundedB,
  roundedL,
  roundedR,
  gap,
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
    <CorePressable
      bg={bg !== undefined ? colors[bg] : undefined}
      borderColor={borderColor !== undefined ? colors[borderColor] : undefined}
      rounded={rounded !== undefined ? r[rounded] : undefined}
      roundedT={roundedT !== undefined ? r[roundedT] : undefined}
      roundedB={roundedB !== undefined ? r[roundedB] : undefined}
      roundedL={roundedL !== undefined ? r[roundedL] : undefined}
      roundedR={roundedR !== undefined ? r[roundedR] : undefined}
      gap={gap !== undefined ? spacing[gap] : undefined}
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

export const Pressable = memo(PressableComponent);
Pressable.displayName = 'Pressable';

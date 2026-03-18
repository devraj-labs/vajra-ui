import React, { memo } from 'react';

import { CorePressable } from '../../../core/pressable';
import { useVajraTheme } from '../../vajra-theme/use-vajra-theme';
import { resolveSpacing } from '../../utils/spacing-props';
import { TUiPressableProps } from './pressable-types';

const PressableComponent: React.FC<TUiPressableProps> = ({
  bg,
  borderColor,
  rounded,
  roundedT,
  roundedB,
  roundedL,
  roundedR,
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
}) => {
  const { colors, rounded: r } = useVajraTheme();
  const spacing = resolveSpacing({ m, mx, my, mt, mb, ml, mr, p, px, py, pt, pb, pl, pr, gap });

  return (
    <CorePressable
      bg={bg !== undefined ? colors[bg] : undefined}
      borderColor={borderColor !== undefined ? colors[borderColor] : undefined}
      rounded={rounded !== undefined ? r[rounded] : undefined}
      roundedT={roundedT !== undefined ? r[roundedT] : undefined}
      roundedB={roundedB !== undefined ? r[roundedB] : undefined}
      roundedL={roundedL !== undefined ? r[roundedL] : undefined}
      roundedR={roundedR !== undefined ? r[roundedR] : undefined}
      {...spacing}
      {...rest}
    />
  );
};

export const Pressable = memo(PressableComponent);
Pressable.displayName = 'Pressable';

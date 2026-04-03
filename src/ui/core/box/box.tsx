import React, { memo } from 'react';

import { Box as CoreBox } from '@devraj-labs/vajra-ui-core';
import { useVajraTheme } from '../../vajra-theme/use-vajra-theme';
import { resolveSpacing } from '../../utils/spacing-props';
import { TUiBoxProps } from './box-types';

const BoxComponent: React.FC<TUiBoxProps> = ({
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
    <CoreBox
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

export const Box = memo(BoxComponent);
Box.displayName = 'Box';

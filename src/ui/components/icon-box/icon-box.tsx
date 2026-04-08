import React, { memo } from 'react';

import { Box } from '../../core/box';
import { useVajraTheme } from '../../vajra-theme/use-vajra-theme';
import { TIconBoxProps } from './icon-box-types';

const IconBoxComponent: React.FC<TIconBoxProps> = ({
  icon: Icon,
  iconSize = 20,
  iconColor = 'primary',
  bg = 'primarySubtle',
  rounded = 'r-3',
  style,
  w = 44,
  h = 44,
  ...rest
}) => {
  const { colors } = useVajraTheme();

  return (
    <Box
      bg={bg}
      rounded={rounded}
      align="center"
      justify="center"
      w={w}
      h={h}
      style={style}
      {...rest}
    >
      <Icon size={iconSize} color={colors[iconColor]} />
    </Box>
  );
};

export const IconBox = memo(IconBoxComponent);
IconBox.displayName = 'IconBox';

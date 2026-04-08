import React, { memo } from 'react';

import { Box } from '../../core/box';
import { Text } from '../../core/text';
import { TBadgeProps } from './badge-types';

const BadgeComponent: React.FC<TBadgeProps> = ({
  label,
  textProps,
  rounded = 'r-full',
  bg = 'primary',
  px = 's-2',
  py = 's-1',
  ...rest
}) => {
  return (
    <Box rounded={rounded} bg={bg} px={px} py={py} align="center" justify="center" {...rest}>
      <Text variant="label" color="textInverse" {...textProps}>
        {label}
      </Text>
    </Box>
  );
};

export const Badge = memo(BadgeComponent);
Badge.displayName = 'Badge';

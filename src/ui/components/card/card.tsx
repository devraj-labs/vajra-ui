import React, { memo } from 'react';

import { Box } from '../../core/box';
import { TCardProps } from './card-types';

const CardComponent: React.FC<TCardProps> = ({
  p = 's-4',
  rounded = 'r-3',
  bg = 'surface',
  children,
  ...rest
}) => {
  return (
    <Box p={p} rounded={rounded} bg={bg} {...rest}>
      {children}
    </Box>
  );
};

export const Card = memo(CardComponent);
Card.displayName = 'Card';

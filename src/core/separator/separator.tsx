import React, { memo } from 'react';
import { Box } from '../box';
import { TSeparatorProps } from './separator-types';

const SeparatorComponent: React.FC<TSeparatorProps> = ({
  orientation = 'horizontal',
  thickness = 1,
  color = 'border',
  variant = 'solid',
}) => {
  const isHorizontal = orientation === 'horizontal';

  return (
    <Box
      w={isHorizontal ? '100%' : thickness}
      h={isHorizontal ? thickness : '100%'}
      borderColor={color}
      borderBottomWidth={isHorizontal ? thickness : 0}
      borderLeftWidth={isHorizontal ? 0 : thickness}
      style={{ borderStyle: variant }}
    />
  );
};

export const Separator = memo(SeparatorComponent);

Separator.displayName = 'Separator';

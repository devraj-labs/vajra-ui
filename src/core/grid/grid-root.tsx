import React, { memo } from 'react';
import { Box } from '../box';
import { TGridRootProps } from './grid-types';

export const GridRoot = memo<TGridRootProps>(({ ...rest }) => (
  <Box direction="row" wrap="wrap" {...rest} />
));

GridRoot.displayName = 'Grid.Root';

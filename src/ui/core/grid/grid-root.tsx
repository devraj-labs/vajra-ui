import React, { memo } from 'react';

import { Box } from '../box';
import { TUiGridRootProps } from './grid-types';

export const GridRoot = memo<TUiGridRootProps>(({ ...rest }) => (
  <Box direction="row" wrap="wrap" {...rest} />
));

GridRoot.displayName = 'Grid.Root';

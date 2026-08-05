import React, { memo } from 'react';

import { Box } from '../box';
import { TUiAbsoluteViewProps } from './absolute-view-types';

export const AbsoluteView = memo<TUiAbsoluteViewProps>(({ children, ...rest }) => (
  <Box style={{ position: 'absolute' }} {...rest}>
    {children}
  </Box>
));

AbsoluteView.displayName = 'AbsoluteView';

import React, { memo } from 'react';

import { Box } from '../box';
import { TAbsoluteCenterProps } from './absolute-center-types';

export const AbsoluteCenter = memo<TAbsoluteCenterProps>(({ children, ...rest }) => (
  <Box
    style={{ bottom: 0, left: 0, position: 'absolute', right: 0, top: 0 }}
    align="center"
    justify="center"
    {...rest}
  >
    {children}
  </Box>
));

AbsoluteCenter.displayName = 'AbsoluteCenter';

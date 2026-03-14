import React, { memo } from 'react';

import { Box } from '../box';
import { TColProps } from './col-types';

const Col = memo<TColProps>(props => <Box direction="column" {...props} />);

Col.displayName = 'Col';

export { Col };

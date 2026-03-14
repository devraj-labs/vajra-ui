import React, { memo } from 'react';

import { Box } from '../box';
import { TRowProps } from './row-types';

const Row = memo<TRowProps>(props => <Box direction="row" {...props} />);

Row.displayName = 'Row';

export { Row };

import React, { memo } from 'react';

import { Box } from '../box';
import { TUiRowProps } from './row-types';

const Row = memo<TUiRowProps>(props => <Box direction="row" {...props} />);

Row.displayName = 'Row';

export { Row };

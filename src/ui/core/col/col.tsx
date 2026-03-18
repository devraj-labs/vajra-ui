import React, { memo } from 'react';

import { Box } from '../box';
import { TUiColProps } from './col-types';

const Col = memo<TUiColProps>(props => <Box direction="column" {...props} />);

Col.displayName = 'Col';

export { Col };

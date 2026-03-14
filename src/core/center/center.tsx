import React, { memo } from 'react';

import { Box } from '../box';
import { TCenterProps } from './center-types';

const Center = memo<TCenterProps>(props => <Box align="center" justify="center" {...props} />);

Center.displayName = 'Center';

export { Center };

import React, { memo } from 'react';

import { Box } from '../box';
import { TUiCenterProps } from './center-types';

const Center = memo<TUiCenterProps>(props => <Box align="center" justify="center" {...props} />);

Center.displayName = 'Center';

export { Center };

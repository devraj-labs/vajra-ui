import React, { memo } from 'react';

import { Box } from '../box';
import { TSpacerProps } from './spacer-types';

const Spacer = memo<TSpacerProps>(({ w, h }) => <Box w={w} h={h} />);

Spacer.displayName = 'Spacer';

export { Spacer };

import React, { memo } from 'react';
import { Box } from '../box';
import { TColProps } from './col-types';

const ColComponent: React.FC<TColProps> = props => <Box flexDirection="column" {...props} />;

export const Col = memo(ColComponent);

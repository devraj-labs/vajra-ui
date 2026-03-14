import React, { memo } from 'react';
import { Box } from '../box';
import { TRowProps } from './row-types';

const RowComponent: React.FC<TRowProps> = props => <Box direction="row" {...props} />;

export const Row = memo(RowComponent);

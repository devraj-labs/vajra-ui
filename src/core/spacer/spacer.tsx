import React, { memo } from 'react';
import { Box } from '../box';
import { TSpacerProps } from './spacer-types';

const SpacerComponent: React.FC<TSpacerProps> = ({ w, h }) => <Box w={w} h={h} />;

export const Spacer = memo(SpacerComponent);

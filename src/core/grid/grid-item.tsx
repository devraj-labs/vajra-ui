import React, { memo } from 'react';
import { Box } from '../box';
import { useDimensions } from '../../hooks';
import { useTheme } from '../../theme';
import { TGridItemProps } from './grid-types';

export const GridItem = memo<TGridItemProps>(
  ({ span = 1, columns = 2, colGap, style, ...rest }) => {
    const { getItemWidth } = useDimensions();
    const { layout } = useTheme();
    const resolvedGap = colGap ?? layout.gap;
    const singleColWidth = getItemWidth(columns, resolvedGap);
    const width = singleColWidth * span + resolvedGap * (span - 1);

    return <Box w={width} style={style} {...rest} />;
  },
);

GridItem.displayName = 'Grid.Item';

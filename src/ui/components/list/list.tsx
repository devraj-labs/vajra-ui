import React, { memo } from 'react';
import { FlatList } from 'react-native';

import { Separator } from '../../core/separator';
import { useVajraTheme } from '../../vajra-theme/use-vajra-theme';
import { TListProps } from './list-types';

const ListComponent = <TItem,>({
  showSeparator = true,
  separatorColor = 'border',
  emptyState,
  p,
  px,
  py,
  testID,
  ...rest
}: TListProps<TItem>) => {
  const { spacing } = useVajraTheme();

  const paddingHorizontal = px !== undefined ? spacing[px] : undefined;
  const paddingVertical = py !== undefined ? spacing[py] : undefined;
  const padding = p !== undefined ? spacing[p] : undefined;

  return (
    <FlatList
      testID={testID}
      ItemSeparatorComponent={
        showSeparator ? () => <Separator color={separatorColor} /> : undefined
      }
      ListEmptyComponent={emptyState ? () => <>{emptyState}</> : undefined}
      contentContainerStyle={{ padding, paddingHorizontal, paddingVertical }}
      {...rest}
    />
  );
};

export const List = memo(ListComponent) as typeof ListComponent;

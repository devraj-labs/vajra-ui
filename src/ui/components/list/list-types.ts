import React from 'react';
import { FlatListProps } from 'react-native';

import { TVajraColors } from '../../vajra-theme/colors';
import { TSpacingToken } from '../../vajra-theme/tokens/spacing-tokens';

export type TListProps<TItem> = Omit<
  FlatListProps<TItem>,
  'ItemSeparatorComponent' | 'ListEmptyComponent' | 'contentContainerStyle'
> & {
  /** Show the default token-driven separator between items. Ignored if the RN ItemSeparatorComponent prop is passed directly through props spreading — pass showSeparator=false to opt out. */
  showSeparator?: boolean;
  separatorColor?: TVajraColors;

  /** Rendered in place of the list when `data` is empty. */
  emptyState?: React.ReactNode;

  p?: TSpacingToken;
  px?: TSpacingToken;
  py?: TSpacingToken;

  testID?: string;
};

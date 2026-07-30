import React, { memo } from 'react';

import { TabBar } from '../../../tab-bar';
import { useTabsContext } from '../../tabs-context';
import { TTabsListProps } from './tabs-list-types';

const TabsListComponent: React.FC<TTabsListProps> = ({ tabs, ...rest }) => {
  const { value, onChange } = useTabsContext();

  return <TabBar tabs={tabs} value={value} onChange={onChange} {...rest} />;
};

export const TabsList = memo(TabsListComponent);
TabsList.displayName = 'TabsList';

import React, { memo } from 'react';

import { TabsContextProvider } from './tabs-context';
import { TTabsRootProps } from './tabs-types';

const TabsRootComponent: React.FC<TTabsRootProps> = ({ value, onChange, children }) => {
  return <TabsContextProvider value={{ value, onChange }}>{children}</TabsContextProvider>;
};

export const TabsRoot = memo(TabsRootComponent);
TabsRoot.displayName = 'TabsRoot';

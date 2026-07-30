import React, { memo } from 'react';

import { useTabsContext } from '../../tabs-context';
import { TTabsContentProps } from './tabs-content-types';

const TabsContentComponent: React.FC<TTabsContentProps> = ({ value, children }) => {
  const { value: activeValue } = useTabsContext();

  if (value !== activeValue) return null;

  return <>{children}</>;
};

export const TabsContent = memo(TabsContentComponent);
TabsContent.displayName = 'TabsContent';

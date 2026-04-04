import { ReactElement } from 'react';

type TSlotType = 'backAction' | 'action' | 'title';

const SLOT_DISPLAY_NAMES: Record<string, TSlotType> = {
  'AppBar.BackAction': 'backAction',
  'AppBar.IconButton': 'action',
  'AppBar.Title': 'title',
};

export const getSlotType = (el: ReactElement): TSlotType | null => {
  const displayName = (el.type as React.ComponentType)?.displayName;

  return displayName ? (SLOT_DISPLAY_NAMES[displayName] ?? null) : null;
};

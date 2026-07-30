import React from 'react';

export type TTabsRootProps = {
  value: string;
  onChange: (value: string) => void;
  children: React.ReactNode;
};

import React from 'react';

export type TMenuItemProps = {
  label: string;
  onPress: () => void;
  icon?: React.ReactNode;
  isDestructive?: boolean;
  isDisabled?: boolean;
  testID?: string;
};

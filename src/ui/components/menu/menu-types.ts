import React from 'react';

export type TMenuAction = {
  label: string;
  onPress: () => void;
  icon?: React.ReactNode;
  isDestructive?: boolean;
  isDisabled?: boolean;
};

export type TMenuProps = {
  isVisible: boolean;
  onClose: () => void;
  actions: TMenuAction[];
  title?: string;
  testID?: string;
};

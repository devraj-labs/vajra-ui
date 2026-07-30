import React from 'react';

export type TAlertVariant = 'default' | 'success' | 'error' | 'warning' | 'info';

export type TAlertProps = {
  message: string;
  title?: string;
  variant?: TAlertVariant;
  onDismiss?: () => void;
  icon?: React.ReactNode;
  testID?: string;
};

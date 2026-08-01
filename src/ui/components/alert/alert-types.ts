import React from 'react';

import { TVajraIconComponent } from '../icon-button/icon-button-types';

export type TAlertVariant = 'default' | 'success' | 'error' | 'warning' | 'info';

export type TAlertProps = {
  message: string;
  title?: string;
  variant?: TAlertVariant;
  onDismiss?: () => void;
  icon?: React.ReactNode;
  /** Icon shown in the dismiss button, when `onDismiss` is set. Defaults to a plain ✕ glyph. */
  dismissIcon?: TVajraIconComponent;
  testID?: string;
};

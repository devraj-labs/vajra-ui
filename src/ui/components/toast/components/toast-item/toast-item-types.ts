import React from 'react';

import { TToastVariant } from '../../toast-types';

export type TToastItemProps = {
  message: string;
  variant?: TToastVariant;
  icon?: React.ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
  testID?: string;
};

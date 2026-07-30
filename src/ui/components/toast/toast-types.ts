import React from 'react';

export type TToastVariant = 'default' | 'success' | 'error' | 'warning' | 'info';

export type TToastOptions = {
  message: string;
  variant?: TToastVariant;
  /** Milliseconds before auto-dismiss. Defaults to 3000. Pass 0 to disable auto-dismiss. */
  duration?: number;
};

export type TToastEntry = TToastOptions & { id: string };

export type TToastContextValue = {
  show: (options: TToastOptions | string) => string;
  hide: (id: string) => void;
};

export type TToastProviderProps = {
  children: React.ReactNode;
  /** Where the toast is anchored on screen. Defaults to 'bottom'. */
  position?: 'top' | 'bottom';
};

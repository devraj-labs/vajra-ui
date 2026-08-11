import React from 'react';

export type TToastVariant = 'default' | 'success' | 'error' | 'warning' | 'info';

export type TToastOptions = {
  message: string;
  variant?: TToastVariant;
  /** Milliseconds before auto-dismiss. Defaults to 3000. Pass 0 to disable auto-dismiss. */
  duration?: number;
  /** Overrides the variant's default icon. Pass `null` to render no icon. */
  icon?: React.ReactNode;
  /** Shows a dismiss (✕) button that closes the toast on press. Defaults to false. */
  dismissible?: boolean;
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
  /** Maximum number of toasts stacked on screen at once. Defaults to the theme's `toast.maxVisible` (3). Extra toasts stay queued and appear as visible ones dismiss. */
  maxVisible?: number;
};

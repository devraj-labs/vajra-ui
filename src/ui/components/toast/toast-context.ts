import { createContext, useContext } from 'react';

import { TToastContextValue } from './toast-types';

const ToastContext = createContext<TToastContextValue | null>(null);

export const ToastContextProvider = ToastContext.Provider;

export const useToast = (): TToastContextValue => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within a ToastProvider');

  return ctx;
};

import { createContext, useContext } from 'react';

import { TAlertContextValue } from './alert-types';

const AlertContext = createContext<TAlertContextValue | null>(null);

export const AlertContextProvider = AlertContext.Provider;

export const useAlert = (): TAlertContextValue => {
  const ctx = useContext(AlertContext);
  if (!ctx) throw new Error('useAlert must be used within an AlertProvider');

  return ctx;
};

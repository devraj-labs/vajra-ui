import { createContext, useContext } from 'react';

type TTabsContext = {
  value: string;
  onChange: (value: string) => void;
};

const TabsContext = createContext<TTabsContext | null>(null);

export const TabsContextProvider = TabsContext.Provider;

export const useTabsContext = (): TTabsContext => {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error('Tabs.List and Tabs.Content must be used inside Tabs.Root');

  return ctx;
};

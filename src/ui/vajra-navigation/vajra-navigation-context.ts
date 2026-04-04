import { createContext, useContext } from 'react';

type TVajraNavigationContext = {
  defaultBackBehaviour?: () => void;
};

export const VajraNavigationContext = createContext<TVajraNavigationContext>({});

export const useVajraNavigation = () => useContext(VajraNavigationContext);

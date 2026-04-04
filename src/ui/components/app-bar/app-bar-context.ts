import { createContext, useContext } from 'react';

import { TVajraColors } from '../../vajra-theme/colors';

type TAppBarContext = {
  tint: TVajraColors;
};

export const AppBarContext = createContext<TAppBarContext>({ tint: 'textInverse' });

export const useAppBarContext = () => useContext(AppBarContext);

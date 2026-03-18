import { createContext, useContext } from 'react';

import { TColorToken } from '../../vajra-theme/tokens/colors/types';

type TSwitchContext = {
  selectedValue: string;
  onChange: (value: string) => void;
  color?: TColorToken;
  isDisabled: boolean;
};

const SwitchContext = createContext<TSwitchContext | null>(null);

export const SwitchContextProvider = SwitchContext.Provider;

export const useSwitchContext = (): TSwitchContext => {
  const ctx = useContext(SwitchContext);
  if (!ctx) throw new Error('Switch must be used inside Switch.Root');

  return ctx;
};

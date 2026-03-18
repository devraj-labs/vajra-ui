import { createContext, useContext } from 'react';

import { TColorToken } from '../../vajra-theme/tokens/colors/types';

type TRadioContext = {
  selectedValue: string;
  onChange: (value: string) => void;
  color?: TColorToken;
  isDisabled: boolean;
};

const RadioContext = createContext<TRadioContext | null>(null);

export const RadioContextProvider = RadioContext.Provider;

export const useRadioContext = (): TRadioContext => {
  const ctx = useContext(RadioContext);
  if (!ctx) throw new Error('Radio must be used inside RadioRoot');

  return ctx;
};

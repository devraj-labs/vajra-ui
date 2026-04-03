import { createContext, useContext } from 'react';

import { TVajraColors } from '../../vajra-theme/colors';

type TCheckboxContext = {
  selectedValues: string[];
  onChange: (value: string) => void;
  color?: TVajraColors;
  isDisabled: boolean;
};

const CheckboxContext = createContext<TCheckboxContext | null>(null);

export const CheckboxContextProvider = CheckboxContext.Provider;

export const useCheckboxContext = (): TCheckboxContext => {
  const ctx = useContext(CheckboxContext);
  if (!ctx) throw new Error('Checkbox must be used inside Checkbox.Root');

  return ctx;
};

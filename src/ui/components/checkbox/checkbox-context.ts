import { createContext, useContext } from 'react';

import { TColorToken } from '../../vajra-theme/tokens/colors/types';

type TCheckboxContext = {
  selectedValues: string[];
  onChange: (value: string) => void;
  color?: TColorToken;
  isDisabled: boolean;
};

const CheckboxContext = createContext<TCheckboxContext | null>(null);

export const CheckboxContextProvider = CheckboxContext.Provider;

export const useCheckboxContext = (): TCheckboxContext => {
  const ctx = useContext(CheckboxContext);
  if (!ctx) throw new Error('Checkbox must be used inside Checkbox.Root');

  return ctx;
};

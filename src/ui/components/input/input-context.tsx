import { createContext, useContext } from 'react';

import { TInputSize } from './input-types';

export type TInputContext = {
  isFocused: boolean;
  hasError: boolean;
  isDisabled: boolean;
  isReadOnly: boolean;
  size: TInputSize;
  setIsFocused: (value: boolean) => void;
};

const InputContext = createContext<TInputContext>({
  isFocused: false,
  hasError: false,
  isDisabled: false,
  isReadOnly: false,
  size: 'md',
  setIsFocused: () => {},
});

export const InputContextProvider = InputContext.Provider;

export const useInputContext = () => useContext(InputContext);

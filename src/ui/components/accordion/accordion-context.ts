import { createContext, useContext } from 'react';

type TAccordionContext = {
  openValues: string[];
  toggle: (value: string) => void;
};

const AccordionContext = createContext<TAccordionContext | null>(null);

export const AccordionContextProvider = AccordionContext.Provider;

export const useAccordionContext = (): TAccordionContext => {
  const ctx = useContext(AccordionContext);
  if (!ctx) throw new Error('Accordion.Item must be used inside Accordion.Root');

  return ctx;
};

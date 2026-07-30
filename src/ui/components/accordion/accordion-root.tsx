import React, { memo, useCallback } from 'react';

import { Col } from '../../core/col';
import { AccordionContextProvider } from './accordion-context';
import { TAccordionRootProps } from './accordion-types';

const AccordionRootComponent: React.FC<TAccordionRootProps> = ({
  openValues,
  onChange,
  allowMultiple = false,
  children,
}) => {
  const toggle = useCallback(
    (value: string) => {
      const isOpen = openValues.includes(value);

      if (allowMultiple) {
        onChange(isOpen ? openValues.filter(v => v !== value) : [...openValues, value]);

        return;
      }

      onChange(isOpen ? [] : [value]);
    },
    [openValues, onChange, allowMultiple],
  );

  return (
    <AccordionContextProvider value={{ openValues, toggle }}>
      <Col>{children}</Col>
    </AccordionContextProvider>
  );
};

export const AccordionRoot = memo(AccordionRootComponent);
AccordionRoot.displayName = 'AccordionRoot';

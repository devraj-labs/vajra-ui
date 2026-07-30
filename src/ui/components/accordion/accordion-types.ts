import React from 'react';

export type TAccordionRootProps = {
  /** Which item(s) are open, by value. Controlled. */
  openValues: string[];
  onChange: (openValues: string[]) => void;
  /** Allow more than one item open at once. Defaults to false (single-open). */
  allowMultiple?: boolean;
  children: React.ReactNode;
};

export type TAccordionItemProps = {
  value: string;
  title: string;
  children: React.ReactNode;
  isDisabled?: boolean;
  testID?: string;
};

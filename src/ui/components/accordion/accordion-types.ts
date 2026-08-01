import React from 'react';

import { TVajraIconComponent } from '../icon-button/icon-button-types';

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
  /** Icon shown at the trailing edge, rotated/swapped between open and closed state. Defaults to a plain ▲/▼ glyph. */
  icon?: TVajraIconComponent;
};

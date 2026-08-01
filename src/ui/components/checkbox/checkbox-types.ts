import React from 'react';

import { TVajraIconComponent } from '../icon-button/icon-button-types';
import { TVajraColors } from '../../vajra-theme/colors';

export type TCheckboxRootProps = {
  values: string[];
  onChange: (values: string[]) => void;
  color?: TVajraColors;
  isDisabled?: boolean;
  /** Icon shown in a selected checkbox. Defaults to a plain ✓ glyph. */
  icon?: TVajraIconComponent;
  children: React.ReactNode;
};

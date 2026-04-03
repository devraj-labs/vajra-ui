import React from 'react';

import { TVajraColors } from '../../vajra-theme/colors';

export type TCheckboxRootProps = {
  values: string[];
  onChange: (values: string[]) => void;
  color?: TVajraColors;
  isDisabled?: boolean;
  children: React.ReactNode;
};

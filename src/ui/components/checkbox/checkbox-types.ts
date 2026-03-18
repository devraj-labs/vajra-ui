import React from 'react';

import { TColorToken } from '../../vajra-theme/tokens/colors/types';

export type TCheckboxRootProps = {
  values: string[];
  onChange: (values: string[]) => void;
  color?: TColorToken;
  isDisabled?: boolean;
  children: React.ReactNode;
};

import React from 'react';

import { TColorToken } from '../../vajra-theme/tokens/colors/types';

export type TSwitchRootProps = {
  value: string;
  onChange: (value: string) => void;
  color?: TColorToken;
  isDisabled?: boolean;
  children: React.ReactNode;
};

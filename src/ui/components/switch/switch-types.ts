import React from 'react';

import { TVajraColors } from '../../vajra-theme/colors';

export type TSwitchRootProps = {
  value: string;
  onChange: (value: string) => void;
  color?: TVajraColors;
  isDisabled?: boolean;
  children: React.ReactNode;
};

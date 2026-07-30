import React from 'react';

import { TVajraColors } from '../../vajra-theme/colors';

export type TTooltipPlacement = 'top' | 'bottom';

export type TTooltipProps = {
  label: string;
  children: React.ReactNode;
  placement?: TTooltipPlacement;
  bg?: TVajraColors;
  textColor?: TVajraColors;
  testID?: string;
};

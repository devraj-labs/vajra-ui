import React from 'react';

import { TVajraColors } from '../../vajra-theme/colors';
import { TRoundedToken } from '../../vajra-theme/tokens/rounded-tokens';
import { TSpacingToken } from '../../vajra-theme/tokens/spacing-tokens';

export type TModalProps = {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;

  closeOnBackdropPress?: boolean;

  bg?: TVajraColors;
  rounded?: TRoundedToken;
  p?: TSpacingToken;

  backdropColor?: TVajraColors;

  testID?: string;
};

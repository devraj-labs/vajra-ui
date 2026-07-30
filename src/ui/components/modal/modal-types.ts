import React from 'react';

import { TVajraColors } from '../../vajra-theme/colors';
import { TRoundedToken } from '../../vajra-theme/tokens/rounded-tokens';
import { TSpacingToken } from '../../vajra-theme/tokens/spacing-tokens';

export type TModalContentAlign = 'center' | 'bottom';

export type TModalProps = {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;

  closeOnBackdropPress?: boolean;

  /** Where the content sits within the backdrop. Sheet uses 'bottom'. */
  contentAlign?: TModalContentAlign;

  bg?: TVajraColors;
  /** Uniform corner radius. Ignored if roundedT is set. */
  rounded?: TRoundedToken;
  /** Top-corners-only radius — useful for bottom-anchored content (Sheet). */
  roundedT?: TRoundedToken;
  p?: TSpacingToken;

  backdropColor?: TVajraColors;

  testID?: string;
};

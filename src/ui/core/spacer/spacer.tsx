import React, { memo } from 'react';

import { Spacer as CoreSpacer } from '../../../core/spacer';
import { useVajraTheme } from '../../vajra-theme/use-vajra-theme';
import { TUiSpacerProps } from './spacer-types';

const SpacerComponent: React.FC<TUiSpacerProps> = ({ w, h }) => {
  const { spacing } = useVajraTheme();

  return (
    <CoreSpacer
      w={w !== undefined ? spacing[w] : undefined}
      h={h !== undefined ? spacing[h] : undefined}
    />
  );
};

export const Spacer = memo(SpacerComponent);
Spacer.displayName = 'Spacer';

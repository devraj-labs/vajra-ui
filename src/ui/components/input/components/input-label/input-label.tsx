import React, { memo } from 'react';

import { Text } from '../../../../core/text';
import { useInputContext } from '../../input-context';
import { getInputSizeStyle } from '../../input-utils';

type TInputLabelProps = { children: React.ReactNode };

const InputLabelComponent = memo<TInputLabelProps>(({ children }) => {
  const { size } = useInputContext();
  const { labelText } = getInputSizeStyle(size);

  return (
    <Text {...labelText} color="textMuted" mb="s-1">
      {children}
    </Text>
  );
});

InputLabelComponent.displayName = 'InputLabel';

export const InputLabel = InputLabelComponent;

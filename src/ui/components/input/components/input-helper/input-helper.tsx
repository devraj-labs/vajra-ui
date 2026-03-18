import React, { memo } from 'react';

import { Text } from '../../../../core/text';
import { useInputContext } from '../../input-context';
import { getInputSizeStyle } from '../../input-utils';

type TInputHelperProps = { children: React.ReactNode };

const InputHelperComponent = memo<TInputHelperProps>(({ children }) => {
  const { hasError, size } = useInputContext();
  if (hasError) return null;

  const { helperText } = getInputSizeStyle(size);

  return (
    <Text {...helperText} color="textMuted" mt="s-1">
      {children}
    </Text>
  );
});

InputHelperComponent.displayName = 'InputHelper';

export const InputHelper = InputHelperComponent;

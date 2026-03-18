import React, { memo } from 'react';

import { Text } from '../../../../core/text';
import { useInputContext } from '../../input-context';

type TInputErrorProps = { children: React.ReactNode };

const InputErrorComponent = memo<TInputErrorProps>(({ children }) => {
  const { hasError } = useInputContext();
  if (!hasError) return null;

  return (
    <Text variant="label" color="error" mt="s-1">
      {children}
    </Text>
  );
});

InputErrorComponent.displayName = 'InputError';

export const InputError = InputErrorComponent;

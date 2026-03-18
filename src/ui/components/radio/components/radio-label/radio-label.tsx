import React, { memo } from 'react';

import { Text } from '../../../../core/text';

type TRadioLabelProps = {
  label: string;
  isDisabled: boolean;
};

const RadioLabelComponent: React.FC<TRadioLabelProps> = ({ label, isDisabled }) => {
  return (
    <Text variant="body" style={{ opacity: isDisabled ? 0.4 : 1 }}>
      {label}
    </Text>
  );
};

export const RadioLabel = memo(RadioLabelComponent);
RadioLabel.displayName = 'RadioLabel';

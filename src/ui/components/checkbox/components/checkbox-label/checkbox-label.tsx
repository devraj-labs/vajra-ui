import React, { memo } from 'react';

import { Text } from '../../../../core/text';

type TCheckboxLabelProps = {
  label: string;
  isDisabled: boolean;
};

const CheckboxLabelComponent: React.FC<TCheckboxLabelProps> = ({ label, isDisabled }) => {
  return (
    <Text variant="body" style={{ opacity: isDisabled ? 0.4 : 1 }}>
      {label}
    </Text>
  );
};

export const CheckboxLabel = memo(CheckboxLabelComponent);
CheckboxLabel.displayName = 'CheckboxLabel';

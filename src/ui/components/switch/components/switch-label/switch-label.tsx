import React, { memo } from 'react';

import { Text } from '../../../../core/text';

type TSwitchLabelProps = {
  label: string;
  isDisabled: boolean;
};

const SwitchLabelComponent: React.FC<TSwitchLabelProps> = ({ label, isDisabled }) => {
  return (
    <Text variant="body" style={{ opacity: isDisabled ? 0.4 : 1 }}>
      {label}
    </Text>
  );
};

export const SwitchLabel = memo(SwitchLabelComponent);
SwitchLabel.displayName = 'SwitchLabel';

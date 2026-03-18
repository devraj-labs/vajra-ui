import React, { memo } from 'react';

import { Center } from '../../../../core/center';
import { Text } from '../../../../core/text';
import { TColorToken } from '../../../../vajra-theme/tokens/colors/types';

type TCheckboxIndicatorProps = {
  isSelected: boolean;
  isDisabled: boolean;
  color?: TColorToken;
};

const CheckboxIndicatorComponent: React.FC<TCheckboxIndicatorProps> = ({
  isSelected,
  isDisabled,
  color = 'primary',
}) => {
  return (
    <Center
      w={20}
      h={20}
      borderWidth={2}
      borderColor={isSelected ? color : 'border'}
      bg={isSelected ? color : 'transparent'}
      rounded="r-1"
      style={{ opacity: isDisabled ? 0.4 : 1 }}
    >
      {isSelected && (
        <Text variant="label" color="textInverse" style={{ lineHeight: 14 }}>
          ✓
        </Text>
      )}
    </Center>
  );
};

export const CheckboxIndicator = memo(CheckboxIndicatorComponent);
CheckboxIndicator.displayName = 'CheckboxIndicator';

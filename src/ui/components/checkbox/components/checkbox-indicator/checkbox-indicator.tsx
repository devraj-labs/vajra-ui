import React, { memo } from 'react';

import { Center } from '../../../../core/center';
import { Text } from '../../../../core/text';
import { useVajraTheme } from '../../../../vajra-theme/use-vajra-theme';
import { TVajraColors } from '../../../../vajra-theme/colors';
import { TVajraIconComponent } from '../../../icon-button/icon-button-types';

type TCheckboxIndicatorProps = {
  isSelected: boolean;
  isDisabled: boolean;
  color?: TVajraColors;
  icon?: TVajraIconComponent;
};

const CheckboxIndicatorComponent: React.FC<TCheckboxIndicatorProps> = ({
  isSelected,
  isDisabled,
  color = 'primary',
  icon: Icon,
}) => {
  const { colors } = useVajraTheme();

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
      {isSelected &&
        (Icon ? (
          <Icon size={14} width={14} height={14} color={colors.textInverse} />
        ) : (
          <Text variant="label" color="textInverse" style={{ lineHeight: 14 }}>
            ✓
          </Text>
        ))}
    </Center>
  );
};

export const CheckboxIndicator = memo(CheckboxIndicatorComponent);
CheckboxIndicator.displayName = 'CheckboxIndicator';

import React, { memo } from 'react';

import { Center } from '../../../../core/center';
import { Box } from '../../../../core/box';
import { useVajraTheme } from '../../../../vajra-theme/use-vajra-theme';
import { TVajraColors } from '../../../../vajra-theme/colors';

type TRadioIndicatorProps = {
  isSelected: boolean;
  isDisabled: boolean;
  color?: TVajraColors;
};

const RadioIndicatorComponent: React.FC<TRadioIndicatorProps> = ({
  isSelected,
  isDisabled,
  color = 'primary',
}) => {
  const { colors } = useVajraTheme();

  return (
    <Center
      w={20}
      h={20}
      borderWidth={2}
      borderColor={isSelected ? color : 'border'}
      rounded="r-full"
      style={{ opacity: isDisabled ? 0.4 : 1 }}
    >
      {isSelected && (
        <Box w={10} h={10} rounded="r-full" style={{ backgroundColor: colors[color] }} />
      )}
    </Center>
  );
};

export const RadioIndicator = memo(RadioIndicatorComponent);
RadioIndicator.displayName = 'RadioIndicator';

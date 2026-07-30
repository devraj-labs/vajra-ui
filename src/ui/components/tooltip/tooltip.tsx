import React, { memo, useState } from 'react';

import { Box } from '../../core/box';
import { Pressable } from '../../core/pressable';
import { Text } from '../../core/text';
import { TTooltipProps } from './tooltip-types';

const TooltipComponent: React.FC<TTooltipProps> = ({
  label,
  children,
  placement = 'top',
  bg = 'text',
  textColor = 'textInverse',
  testID,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Box style={{ position: 'relative', alignSelf: 'flex-start' }}>
      <Pressable
        onPress={() => setIsVisible(prev => !prev)}
        accessibilityRole="button"
        accessibilityState={{ expanded: isVisible }}
      >
        {children}
      </Pressable>

      {isVisible && (
        <Box
          bg={bg}
          rounded="r-2"
          px="s-2"
          py="s-1"
          testID={testID}
          style={{
            position: 'absolute',
            left: 0,
            [placement === 'top' ? 'bottom' : 'top']: '100%',
            marginTop: placement === 'bottom' ? 4 : 0,
            marginBottom: placement === 'top' ? 4 : 0,
            zIndex: 1,
          }}
        >
          <Text variant="label" color={textColor}>
            {label}
          </Text>
        </Box>
      )}
    </Box>
  );
};

export const Tooltip = memo(TooltipComponent);
Tooltip.displayName = 'Tooltip';

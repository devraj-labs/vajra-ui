import React, { memo } from 'react';

import { Box } from '../../core/box';
import { Col } from '../../core/col';
import { Pressable } from '../../core/pressable';
import { Row } from '../../core/row';
import { Text } from '../../core/text';
import { ALERT_VARIANT_COLORS } from './alert-constants';
import { TAlertProps } from './alert-types';

const AlertComponent: React.FC<TAlertProps> = ({
  message,
  title,
  variant = 'default',
  onDismiss,
  icon,
  testID,
}) => {
  const { bg, border, text } = ALERT_VARIANT_COLORS[variant];

  return (
    <Box
      bg={bg}
      borderColor={border}
      borderWidth={1}
      rounded="r-3"
      p="s-3"
      testID={testID}
      accessibilityRole="alert"
    >
      <Row gap="s-2" align="flex-start">
        {icon}
        <Col flex={1} gap="s-1">
          {title !== undefined && (
            <Text variant="bodyMedium" color={text}>
              {title}
            </Text>
          )}
          <Text variant="bodySmall" color={text}>
            {message}
          </Text>
        </Col>
        {onDismiss !== undefined && (
          <Pressable
            onPress={onDismiss}
            accessibilityRole="button"
            accessibilityLabel="Dismiss"
            testID={testID ? `${testID}-dismiss` : undefined}
          >
            <Text variant="label" color={text}>
              ✕
            </Text>
          </Pressable>
        )}
      </Row>
    </Box>
  );
};

export const Alert = memo(AlertComponent);
Alert.displayName = 'Alert';

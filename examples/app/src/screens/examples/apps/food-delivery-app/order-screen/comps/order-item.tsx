import React, { memo } from 'react';

import { Col, Row, Text } from 'vajra-ui';

type TOrderItemProps = { name: string; qty: number; price: string };

export const OrderItem = memo<TOrderItemProps>(({ name, qty, price }) => (
  <Row p="s-3" align="center" justify="space-between">
    <Row align="center" gap="s-2">
      <Text variant="body" color="textMuted">×{qty}</Text>
      <Text variant="labelMedium">{name}</Text>
    </Row>
    <Text variant="labelMedium">{price}</Text>
  </Row>
));

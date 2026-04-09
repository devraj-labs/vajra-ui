import React, { memo } from 'react';

import { Box, Col, Row, Text } from 'vajra-ui';
import { TVajraColors } from 'vajra-ui';

type TCartItemProps = { name: string; price: string; qty: number; bg: TVajraColors };

export const CartItem = memo<TCartItemProps>(({ name, price, qty, bg }) => (
  <Row align="center" gap="s-3" p="s-3">
    <Box w={48} h={48} rounded="r-3" bg={bg} align="center" justify="center">
      <Text variant="body">🛍️</Text>
    </Box>
    <Col flex={1} gap="s-1">
      <Text variant="labelMedium">{name}</Text>
      <Text variant="caption" color="textMuted">Qty: {qty}</Text>
    </Col>
    <Text variant="labelMedium" color="primary">{price}</Text>
  </Row>
));

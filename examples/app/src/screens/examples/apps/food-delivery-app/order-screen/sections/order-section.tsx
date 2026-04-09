import React from 'react';

import { Badge, Box, Button, Card, Col, Row, Separator, Text } from 'vajra-ui';

import { OrderItem } from '../comps/order-item';

const ORDER_ITEMS = [
  { name: 'Chicken Biryani', qty: 2, price: '$18.00' },
  { name: 'Garlic Naan', qty: 3, price: '$6.00' },
  { name: 'Mango Lassi', qty: 2, price: '$8.00' },
];

export const OrderSection: React.FC = () => (
  <Col gap="s-4">
    <Card rounded="r-3" borderWidth={1} borderColor="border" gap="s-2" p="s-3">
      <Row align="center" justify="space-between">
        <Text variant="labelMedium">Spice Garden</Text>
        <Badge label="Preparing" bg="warningSubtle" textProps={{ color: 'warning' }} />
      </Row>
      <Text variant="caption" color="textMuted">Estimated delivery: 25 min</Text>
    </Card>
    <Card rounded="r-3" borderWidth={1} borderColor="border">
      {ORDER_ITEMS.map((item, i) => (
        <Box key={i}>
          <OrderItem {...item} />
          {i < ORDER_ITEMS.length - 1 && <Separator />}
        </Box>
      ))}
    </Card>
    <Card p="s-4" rounded="r-3" borderWidth={1} borderColor="border" gap="s-2">
      <Row justify="space-between">
        <Text variant="body" color="textMuted">Subtotal</Text>
        <Text variant="labelMedium">$32.00</Text>
      </Row>
      <Row justify="space-between">
        <Text variant="body" color="textMuted">Delivery</Text>
        <Text variant="labelMedium">$2.99</Text>
      </Row>
      <Separator />
      <Row justify="space-between">
        <Text variant="labelMedium">Total</Text>
        <Text variant="labelMedium" color="primary">$34.99</Text>
      </Row>
    </Card>
    <Button label="Track Order" variant="solid" onPress={() => {}} />
  </Col>
);

import React from 'react';

import { Box, Button, Card, Col, Row, Separator, Text } from 'vajra-ui';
import { TVajraColors } from 'vajra-ui';

import { CartItem } from '../comps/cart-item';

type TCartEntry = { name: string; price: string; qty: number; bg: TVajraColors };

const CART_ITEMS: TCartEntry[] = [
  { name: 'Wireless Headphones', price: '$89.99', qty: 1, bg: 'primarySubtle' },
  { name: 'Running Shoes', price: '$129.00', qty: 2, bg: 'secondarySubtle' },
  { name: 'Leather Wallet', price: '$45.00', qty: 1, bg: 'successSubtle' },
];

export const CartSection: React.FC = () => (
  <Col gap="s-4">
    <Card rounded="r-3" borderWidth={1} borderColor="border">
      {CART_ITEMS.map((item, i) => (
        <Box key={i}>
          <CartItem {...item} />
          {i < CART_ITEMS.length - 1 && <Separator />}
        </Box>
      ))}
    </Card>
    <Card p="s-4" rounded="r-3" borderWidth={1} borderColor="border" gap="s-2">
      <Row justify="space-between">
        <Text variant="body" color="textMuted">Subtotal</Text>
        <Text variant="labelMedium">$263.99</Text>
      </Row>
      <Row justify="space-between">
        <Text variant="body" color="textMuted">Shipping</Text>
        <Text variant="labelMedium" color="success">Free</Text>
      </Row>
      <Separator />
      <Row justify="space-between">
        <Text variant="labelMedium">Total</Text>
        <Text variant="labelMedium" color="primary">$263.99</Text>
      </Row>
    </Card>
    <Button label="Checkout" variant="solid" onPress={() => {}} />
  </Col>
);

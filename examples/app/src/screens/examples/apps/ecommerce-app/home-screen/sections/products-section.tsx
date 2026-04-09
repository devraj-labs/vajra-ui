import React from 'react';

import { Col, Row, Text } from 'vajra-ui';
import { TVajraColors } from 'vajra-ui';

import { ProductCard } from '../comps/product-card';

type TProduct = { name: string; price: string; category: string; bg: TVajraColors };

const PRODUCTS: TProduct[] = [
  { name: 'Wireless Headphones', price: '$89.99', category: 'Audio', bg: 'primarySubtle' },
  { name: 'Running Shoes', price: '$129.00', category: 'Sports', bg: 'secondarySubtle' },
  { name: 'Leather Wallet', price: '$45.00', category: 'Accessories', bg: 'successSubtle' },
  { name: 'Desk Lamp', price: '$34.00', category: 'Home', bg: 'warningSubtle' },
];

export const ProductsSection: React.FC = () => (
  <Col gap="s-3">
    <Text variant="labelMedium">Featured Products</Text>
    <Row gap="s-3" wrap="wrap">
      {PRODUCTS.map(p => (
        <ProductCard key={p.name} {...p} onPress={() => {}} />
      ))}
    </Row>
  </Col>
);

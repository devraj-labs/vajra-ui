import React from 'react';

import { Col } from 'vajra-ui';
import { TVajraColors } from 'vajra-ui';

import { RestaurantCard } from '../comps/restaurant-card';

type TRestaurant = { name: string; cuisine: string; rating: string; time: string; bg: TVajraColors };

const RESTAURANTS: TRestaurant[] = [
  { name: 'Spice Garden', cuisine: 'Indian · Curry · Biryani', rating: '4.8', time: '25 min', bg: 'warningSubtle' },
  { name: 'Tokyo Ramen', cuisine: 'Japanese · Ramen · Sushi', rating: '4.6', time: '30 min', bg: 'primarySubtle' },
  { name: 'Bella Italia', cuisine: 'Italian · Pizza · Pasta', rating: '4.5', time: '20 min', bg: 'errorSubtle' },
  { name: 'Green Bowl', cuisine: 'Healthy · Salads · Wraps', rating: '4.7', time: '15 min', bg: 'successSubtle' },
];

export const RestaurantsSection: React.FC = () => (
  <Col gap="s-3">
    {RESTAURANTS.map(r => (
      <RestaurantCard key={r.name} {...r} />
    ))}
  </Col>
);

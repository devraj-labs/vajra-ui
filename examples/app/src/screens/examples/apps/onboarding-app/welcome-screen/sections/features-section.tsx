import React from 'react';

import { Col } from 'vajra-ui';
import { TVajraColors } from 'vajra-ui';

import { FeatureRow } from '../comps/feature-row';

type TFeature = { emoji: string; title: string; description: string; dot: TVajraColors };

const FEATURES: TFeature[] = [
  { emoji: '⚡️', title: 'Zero StyleSheet', description: 'Build UIs purely with tokens — no StyleSheet.create calls.', dot: 'primarySubtle' },
  { emoji: '🎨', title: 'Theme Switching', description: 'Switch themes at runtime with a single line of code.', dot: 'secondarySubtle' },
  { emoji: '📦', title: '30+ Components', description: 'Every common UI pattern covered out of the box.', dot: 'successSubtle' },
];

export const FeaturesSection: React.FC = () => (
  <Col gap="s-4">
    {FEATURES.map(f => (
      <FeatureRow key={f.title} {...f} />
    ))}
  </Col>
);

import React from 'react';

import { Box, Button, Col, Text } from 'vajra-ui';

import { StepIndicator } from '../comps/step-indicator';

export const StepContentSection: React.FC = () => (
  <Col gap="s-8" align="center">
    <StepIndicator total={3} current={1} />
    <Col align="center" gap="s-3">
      <Box w={100} h={100} rounded="r-3" bg="secondarySubtle" align="center" justify="center">
        <Text variant="h1">🎨</Text>
      </Box>
      <Col align="center" gap="s-1">
        <Text variant="h3">Customize Your Theme</Text>
        <Text variant="body" color="textMuted" style={{ textAlign: 'center' }}>
          Pick from 8 color presets or create{'\n'}your own with full token control.
        </Text>
      </Col>
    </Col>
    <Col gap="s-3" style={{ width: '100%' }}>
      <Button label="Continue" variant="solid" onPress={() => {}} />
      <Button label="Back" variant="ghost" onPress={() => {}} />
    </Col>
  </Col>
);

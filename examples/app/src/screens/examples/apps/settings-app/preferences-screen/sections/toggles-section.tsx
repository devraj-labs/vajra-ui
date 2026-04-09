import React from 'react';

import { Box, Card, Separator } from 'vajra-ui';

import { ToggleRow } from '../comps/toggle-row';

const PREFERENCES = [
  { label: 'Push Notifications', description: 'Get alerts for new messages and updates.' },
  { label: 'Dark Mode', description: 'Use dark theme across the app.' },
  { label: 'Analytics', description: 'Help improve the app by sharing usage data.' },
  { label: 'Auto-Update', description: 'Keep the app updated automatically.' },
];

export const TogglesSection: React.FC = () => (
  <Card rounded="r-3" borderWidth={1} borderColor="border">
    {PREFERENCES.map((p, i) => (
      <Box key={p.label}>
        <ToggleRow {...p} />
        {i < PREFERENCES.length - 1 && <Separator />}
      </Box>
    ))}
  </Card>
);

import React, { memo, useState } from 'react';

import { Col, Row, Switch, Text } from 'vajra-ui';

type TToggleRowProps = { label: string; description: string };

export const ToggleRow = memo<TToggleRowProps>(({ label, description }) => {
  const [enabled, setEnabled] = useState(false);

  return (
    <Row align="center" justify="space-between" p="s-4">
      <Col flex={1} gap="s-1" pr="s-4">
        <Text variant="labelMedium">{label}</Text>
        <Text variant="caption" color="textMuted">{description}</Text>
      </Col>
      <Switch value={enabled} onValueChange={setEnabled} />
    </Row>
  );
});

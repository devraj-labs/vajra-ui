import React, { memo } from 'react';

import { Badge, Box, Col, Text } from 'vajra-ui';

type TAvatarHeaderProps = { name: string; email: string; initials: string };

export const AvatarHeader = memo<TAvatarHeaderProps>(({ name, email, initials }) => (
  <Col align="center" gap="s-2">
    <Box w={72} h={72} rounded="r-full" bg="primary" align="center" justify="center">
      <Text variant="h3" color="textInverse">{initials}</Text>
    </Box>
    <Col align="center" gap="s-1">
      <Text variant="labelMedium">{name}</Text>
      <Text variant="caption" color="textMuted">{email}</Text>
    </Col>
    <Badge label="Pro Member" bg="primarySubtle" textProps={{ color: 'primary' }} />
  </Col>
));

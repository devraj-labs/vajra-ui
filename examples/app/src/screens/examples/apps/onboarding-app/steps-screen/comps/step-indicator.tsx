import React, { memo } from 'react';

import { Box, Row } from 'vajra-ui';

type TStepIndicatorProps = { total: number; current: number };

export const StepIndicator = memo<TStepIndicatorProps>(({ total, current }) => (
  <Row gap="s-2" justify="center">
    {Array.from({ length: total }).map((_, i) => (
      <Box key={i} w={i === current ? 24 : 8} h={8} rounded="r-full" bg={i === current ? 'primary' : 'border'} />
    ))}
  </Row>
));

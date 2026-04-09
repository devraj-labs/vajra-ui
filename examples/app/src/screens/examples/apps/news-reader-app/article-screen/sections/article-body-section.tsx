import React from 'react';

import { Col, Text } from 'vajra-ui';

export const ArticleBodySection: React.FC = () => (
  <Col gap="s-4">
    <Text variant="body" color="textMuted">
      React Native 0.74 ships with the New Architecture enabled by default, marking a major milestone
      for the ecosystem. The New Architecture introduces a new rendering engine (Fabric), a new native
      module system (TurboModules), and a new JavaScript engine (Hermes) all enabled out of the box.
    </Text>
    <Text variant="body" color="textMuted">
      For library authors, this means the time to migrate is now. Libraries that haven't adopted
      the new architecture may face compatibility issues, and the community is rallying to get
      key packages updated before the stable release hits production apps.
    </Text>
    <Text variant="body" color="textMuted">
      Vajra UI has already been tested and confirmed compatible with the New Architecture, making
      it one of the first component libraries ready for the next generation of React Native apps.
    </Text>
  </Col>
);

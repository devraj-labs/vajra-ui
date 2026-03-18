import React from 'react';

import { VajraProvider } from 'vajra-ui';

import { PreviewTabs } from './src/preview-tabs';

function App() {
  return (
    <VajraProvider>
      <PreviewTabs />
    </VajraProvider>
  );
}

export default App;

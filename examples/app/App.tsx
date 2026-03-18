import React from 'react';

import { VajraProvider } from 'vajra-ui';

import { PreviewComponents } from './src/preview-components';

function App() {
  return (
    <VajraProvider>
      <PreviewComponents />
    </VajraProvider>
  );
}

export default App;

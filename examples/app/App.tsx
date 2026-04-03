import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { VajraProvider } from 'vajra-ui';

import { PreviewComponents } from './src/preview-components';

function App() {
  return (
    <SafeAreaProvider>
      <VajraProvider>
        <PreviewComponents />
      </VajraProvider>
    </SafeAreaProvider>
  );
}

export default App;

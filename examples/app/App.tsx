import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AppThemeProvider } from './src/app-theme-context';
import { AppNavigator } from './src/navigation/app-navigator';

function App() {
  return (
    <SafeAreaProvider>
      <AppThemeProvider>
        <AppNavigator />
      </AppThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;

import { ScrollView, Text, useColorScheme } from 'react-native';
import { Box, ThemeProvider } from 'vajra-ui';

function App() {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider colorScheme={colorScheme ?? 'light'}>
      <ScrollView contentContainerStyle={{ flex: 1, backgroundColor: 'pink' }}>
        <Box bg="background" flex={1}>
          
        </Box>
      </ScrollView>
    </ThemeProvider>
  );
}

export default App;

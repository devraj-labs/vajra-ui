import { ScrollView, Text, useColorScheme } from 'react-native';
import { Box, ThemeProvider } from 'vajra-ui';

function App() {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider colorScheme={colorScheme ?? 'light'}>
      <ScrollView contentContainerStyle={{ flex: 1, backgroundColor: 'pink' }}>
        <Box bg="background" flex={1}>
          <Text>Example Text 1</Text>
          <Text>Example Text 2</Text>
          <Text>Example Text 3</Text>
          <Text>Example Text 4</Text>
          <Text>Example Text 5</Text>
        </Box>
      </ScrollView>
    </ThemeProvider>
  );
}

export default App;

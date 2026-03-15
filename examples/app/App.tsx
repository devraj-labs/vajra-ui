import { ScrollView, useColorScheme } from 'react-native';
import { Box, Center, Text, ThemeProvider } from 'vajra-ui';

function App() {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider colorScheme={colorScheme ?? 'light'}>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <Box flex={1} bg='background'>
          <Center h={500}>
            <Text variant="xs">Example Text 6</Text>
            <Text variant="sm">Example Text 1</Text>
            <Text variant="md">Example Text 2</Text>
            <Text variant="lg">Example Text 3</Text>
            <Text variant="xl">Example Text 4</Text>
            <Text variant="xxl">Example Text 5</Text>
          </Center>
        </Box>
      </ScrollView>
    </ThemeProvider>
  );
}

export default App;

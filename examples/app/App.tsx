import { ScrollView, useColorScheme } from 'react-native';
import { Center, Text, ThemeProvider } from 'vajra-ui';

function App() {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider colorScheme={colorScheme ?? 'light'}>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <Center h={1000}>
          <Text variant="xs">Example Text 6</Text>
          <Text variant="sm">Example Text 1</Text>
          <Text variant="md">Example Text 2</Text>
          <Text variant="lg">Example Text 3</Text>
          <Text variant="xl">Example Text 4</Text>
          <Text variant="xxl">Example Text 5</Text>
        </Center>
      </ScrollView>
    </ThemeProvider>
  );
}

export default App;

import { ScrollView } from 'react-native';

import { Box, Text, ThemeProvider } from 'vajra-ui';

import { theme, useAppTheme } from './src/theme';

function Screen() {
  const { colors, spacing, rounded, typography } = useAppTheme();

  return (
    <Box flex={1} bg={colors.background} p={spacing.md}>
      <Box bg={colors.surface} p={spacing.lg} rounded={rounded.md}>
        <Text {...typography.xxl} color={colors.text}>
          Hello Vajra
        </Text>
        <Text {...typography.sm} color={colors.textMuted}>
          Subtext goes here
        </Text>
      </Box>
    </Box>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <Screen />
      </ScrollView>
    </ThemeProvider>
  );
}

export default App;

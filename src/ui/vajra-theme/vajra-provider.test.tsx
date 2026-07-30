import React from 'react';
import { StyleSheet } from 'react-native';
import { render, screen } from '@testing-library/react-native';

import { VajraProvider } from './vajra-provider';
import { createVajraTheme } from './create-vajra-theme';
import { defaultVajraTheme } from './vajra-theme';
import { Text } from '../core/text';

describe('VajraProvider', () => {
  it('provides the light theme by default', () => {
    render(
      <VajraProvider>
        <Text color="primary" testID="txt">
          Hello
        </Text>
      </VajraProvider>,
    );

    const style = StyleSheet.flatten(screen.getByTestId('txt').props.style);

    expect(style.color).toBe(defaultVajraTheme.light.colors.primary);
  });

  it('switches resolved colors at runtime when a custom theme is passed in via rerender', () => {
    const customTheme = createVajraTheme({
      fonts: {},
      colors: { primary: '#ABCDEF' },
    });

    const { rerender } = render(
      <VajraProvider>
        <Text color="primary" testID="txt">
          Hello
        </Text>
      </VajraProvider>,
    );

    const initialStyle = StyleSheet.flatten(screen.getByTestId('txt').props.style);

    rerender(
      <VajraProvider theme={customTheme}>
        <Text color="primary" testID="txt">
          Hello
        </Text>
      </VajraProvider>,
    );

    const updatedStyle = StyleSheet.flatten(screen.getByTestId('txt').props.style);

    expect(updatedStyle.color).toBe('#ABCDEF');
    expect(updatedStyle.color).not.toBe(initialStyle.color);
  });

  it('provides the dark theme when colorScheme="dark" is passed', () => {
    render(
      <VajraProvider colorScheme="dark">
        <Text color="primary" testID="txt">
          Hello
        </Text>
      </VajraProvider>,
    );

    const style = StyleSheet.flatten(screen.getByTestId('txt').props.style);

    expect(style.color).toBe(defaultVajraTheme.dark.colors.primary);
  });
});

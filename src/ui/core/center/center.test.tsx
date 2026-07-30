import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { Text as RNText } from 'react-native';

import { VajraProvider } from '../../vajra-theme';
import { Center } from './center';

const flattenStyle = (style: unknown): Record<string, unknown> => {
  if (Array.isArray(style)) {
    return Object.assign({}, ...style.map(flattenStyle));
  }

  return (style as Record<string, unknown>) ?? {};
};

describe('Center', () => {
  it('renders its children', () => {
    render(
      <VajraProvider>
        <Center>
          <RNText>centered content</RNText>
        </Center>
      </VajraProvider>,
    );

    expect(screen.getByText('centered content')).toBeTruthy();
  });

  it('applies align and justify center', () => {
    render(
      <VajraProvider>
        <Center testID="center">
          <RNText>content</RNText>
        </Center>
      </VajraProvider>,
    );

    const style = flattenStyle(screen.getByTestId('center').props.style);

    expect(style.alignItems).toBe('center');
    expect(style.justifyContent).toBe('center');
  });
});

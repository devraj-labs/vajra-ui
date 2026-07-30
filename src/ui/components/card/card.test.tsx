import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { Text as RNText } from 'react-native';

import { VajraProvider, defaultVajraTheme } from '../../vajra-theme';
import { Card } from './card';

const flattenStyle = (style: unknown): Record<string, unknown> => {
  if (Array.isArray(style)) {
    return Object.assign({}, ...style.map(flattenStyle));
  }

  return (style as Record<string, unknown>) ?? {};
};

describe('Card', () => {
  it('renders its children', () => {
    render(
      <VajraProvider>
        <Card>
          <RNText>card content</RNText>
        </Card>
      </VajraProvider>,
    );

    expect(screen.getByText('card content')).toBeTruthy();
  });

  it('defaults to surface bg, r-3 rounded, and s-4 padding', () => {
    render(
      <VajraProvider>
        <Card testID="card">
          <RNText>content</RNText>
        </Card>
      </VajraProvider>,
    );

    const style = flattenStyle(screen.getByTestId('card').props.style);

    expect(style.backgroundColor).toBe(defaultVajraTheme.light.colors.surface);
    expect(style.borderRadius).toBe(defaultVajraTheme.light.rounded['r-3']);
    expect(style.padding).toBe(defaultVajraTheme.light.spacing['s-4']);
  });

  it('allows overriding token props', () => {
    render(
      <VajraProvider>
        <Card testID="card" bg="primary" rounded="r-1" p="s-2">
          <RNText>content</RNText>
        </Card>
      </VajraProvider>,
    );

    const style = flattenStyle(screen.getByTestId('card').props.style);

    expect(style.backgroundColor).toBe(defaultVajraTheme.light.colors.primary);
    expect(style.borderRadius).toBe(defaultVajraTheme.light.rounded['r-1']);
    expect(style.padding).toBe(defaultVajraTheme.light.spacing['s-2']);
  });
});

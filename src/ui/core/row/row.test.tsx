import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { Text as RNText } from 'react-native';

import { VajraProvider, defaultVajraTheme } from '../../vajra-theme';
import { Row } from './row';

const flattenStyle = (style: unknown): Record<string, unknown> => {
  if (Array.isArray(style)) {
    return Object.assign({}, ...style.map(flattenStyle));
  }

  return (style as Record<string, unknown>) ?? {};
};

describe('Row', () => {
  it('renders its children', () => {
    render(
      <VajraProvider>
        <Row>
          <RNText>row content</RNText>
        </Row>
      </VajraProvider>,
    );

    expect(screen.getByText('row content')).toBeTruthy();
  });

  it('always applies flexDirection: row', () => {
    render(
      <VajraProvider>
        <Row testID="row">
          <RNText>content</RNText>
        </Row>
      </VajraProvider>,
    );

    const style = flattenStyle(screen.getByTestId('row').props.style);

    expect(style.flexDirection).toBe('row');
  });

  it('resolves token props like Box does', () => {
    render(
      <VajraProvider>
        <Row testID="row" bg="surface" gap="s-2">
          <RNText>content</RNText>
        </Row>
      </VajraProvider>,
    );

    const style = flattenStyle(screen.getByTestId('row').props.style);

    expect(style.backgroundColor).toBe(defaultVajraTheme.light.colors.surface);
    expect(style.gap).toBe(defaultVajraTheme.light.spacing['s-2']);
  });
});

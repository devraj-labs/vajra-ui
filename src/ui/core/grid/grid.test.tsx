import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { Text as RNText } from 'react-native';

import { VajraProvider } from '../../vajra-theme';
import { Grid } from './grid';

const flattenStyle = (style: unknown): Record<string, unknown> => {
  if (Array.isArray(style)) {
    return Object.assign({}, ...style.map(flattenStyle));
  }

  return (style as Record<string, unknown>) ?? {};
};

describe('Grid', () => {
  it('Grid.Root renders its children with row/wrap layout', () => {
    render(
      <VajraProvider>
        <Grid.Root testID="grid-root">
          <RNText>grid content</RNText>
        </Grid.Root>
      </VajraProvider>,
    );

    expect(screen.getByText('grid content')).toBeTruthy();

    const style = flattenStyle(screen.getByTestId('grid-root').props.style);

    expect(style.flexDirection).toBe('row');
    expect(style.flexWrap).toBe('wrap');
  });

  it('Grid.Item computes a width based on span/columns', () => {
    render(
      <VajraProvider>
        <Grid.Root>
          <Grid.Item testID="grid-item" span={1} columns={2}>
            <RNText>item</RNText>
          </Grid.Item>
        </Grid.Root>
      </VajraProvider>,
    );

    const style = flattenStyle(screen.getByTestId('grid-item').props.style);

    expect(typeof style.width).toBe('number');
    expect(style.width).toBeGreaterThan(0);
  });

  it('Grid.Item spanning all columns is roughly double a single-span item', () => {
    render(
      <VajraProvider>
        <Grid.Root>
          <Grid.Item testID="single" span={1} columns={2}>
            <RNText>a</RNText>
          </Grid.Item>
          <Grid.Item testID="double" span={2} columns={2}>
            <RNText>b</RNText>
          </Grid.Item>
        </Grid.Root>
      </VajraProvider>,
    );

    const singleStyle = flattenStyle(screen.getByTestId('single').props.style);
    const doubleStyle = flattenStyle(screen.getByTestId('double').props.style);

    expect(doubleStyle.width as number).toBeCloseTo((singleStyle.width as number) * 2, 5);
  });
});

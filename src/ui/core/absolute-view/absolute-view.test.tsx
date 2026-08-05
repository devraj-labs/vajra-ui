import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { Text as RNText } from 'react-native';

import { VajraProvider } from '../../vajra-theme';
import { AbsoluteView } from './absolute-view';

const flattenStyle = (style: unknown): Record<string, unknown> => {
  if (Array.isArray(style)) {
    return Object.assign({}, ...style.map(flattenStyle));
  }

  return (style as Record<string, unknown>) ?? {};
};

describe('AbsoluteView', () => {
  it('renders its children', () => {
    render(
      <VajraProvider>
        <AbsoluteView>
          <RNText>absolute content</RNText>
        </AbsoluteView>
      </VajraProvider>,
    );

    expect(screen.getByText('absolute content')).toBeTruthy();
  });

  it('applies position: absolute without centering or filling the parent', () => {
    render(
      <VajraProvider>
        <AbsoluteView testID="absolute-view">
          <RNText>content</RNText>
        </AbsoluteView>
      </VajraProvider>,
    );

    const style = flattenStyle(screen.getByTestId('absolute-view').props.style);

    expect(style.position).toBe('absolute');
    expect(style.top).toBeUndefined();
    expect(style.alignItems).toBeUndefined();
    expect(style.justifyContent).toBeUndefined();
  });

  it('positions using the given corner offsets', () => {
    render(
      <VajraProvider>
        <AbsoluteView testID="absolute-view" top={-4} right={-4}>
          <RNText>content</RNText>
        </AbsoluteView>
      </VajraProvider>,
    );

    const style = flattenStyle(screen.getByTestId('absolute-view').props.style);

    expect(style.position).toBe('absolute');
    expect(style.top).toBe(-4);
    expect(style.right).toBe(-4);
  });
});

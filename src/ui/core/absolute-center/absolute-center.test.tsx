import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { Text as RNText } from 'react-native';

import { VajraProvider } from '../../vajra-theme';
import { AbsoluteCenter } from './absolute-center';

const flattenStyle = (style: unknown): Record<string, unknown> => {
  if (Array.isArray(style)) {
    return Object.assign({}, ...style.map(flattenStyle));
  }

  return (style as Record<string, unknown>) ?? {};
};

describe('AbsoluteCenter', () => {
  it('renders its children', () => {
    render(
      <VajraProvider>
        <AbsoluteCenter>
          <RNText>absolute content</RNText>
        </AbsoluteCenter>
      </VajraProvider>,
    );

    expect(screen.getByText('absolute content')).toBeTruthy();
  });

  it('applies absolute positioning filling the parent and centers content', () => {
    render(
      <VajraProvider>
        <AbsoluteCenter testID="absolute-center">
          <RNText>content</RNText>
        </AbsoluteCenter>
      </VajraProvider>,
    );

    const style = flattenStyle(screen.getByTestId('absolute-center').props.style);

    expect(style.position).toBe('absolute');
    expect(style.top).toBe(0);
    expect(style.bottom).toBe(0);
    expect(style.left).toBe(0);
    expect(style.right).toBe(0);
    expect(style.alignItems).toBe('center');
    expect(style.justifyContent).toBe('center');
  });
});

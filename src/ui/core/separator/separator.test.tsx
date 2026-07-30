import React from 'react';
import { render } from '@testing-library/react-native';
import { View } from 'react-native';

import { VajraProvider, defaultVajraTheme } from '../../vajra-theme';
import { Separator } from './separator';

const flattenStyle = (style: unknown): Record<string, unknown> => {
  if (Array.isArray(style)) {
    return Object.assign({}, ...style.map(flattenStyle));
  }

  return (style as Record<string, unknown>) ?? {};
};

describe('Separator', () => {
  it('renders without crashing', () => {
    const { UNSAFE_getByType } = render(
      <VajraProvider>
        <Separator />
      </VajraProvider>,
    );

    expect(UNSAFE_getByType(View)).toBeTruthy();
  });

  it('defaults to the theme border color', () => {
    const { UNSAFE_getByType } = render(
      <VajraProvider>
        <Separator />
      </VajraProvider>,
    );

    const style = flattenStyle(UNSAFE_getByType(View).props.style);

    expect(style.borderColor).toBe(defaultVajraTheme.light.colors.border);
  });

  it('resolves a color token override to the theme value', () => {
    const { UNSAFE_getByType } = render(
      <VajraProvider>
        <Separator color="primary" />
      </VajraProvider>,
    );

    const style = flattenStyle(UNSAFE_getByType(View).props.style);

    expect(style.borderColor).toBe(defaultVajraTheme.light.colors.primary);
  });

  it('renders a vertical orientation with full height and given thickness as width', () => {
    const { UNSAFE_getByType } = render(
      <VajraProvider>
        <Separator orientation="vertical" thickness={2} />
      </VajraProvider>,
    );

    const style = flattenStyle(UNSAFE_getByType(View).props.style);

    expect(style.width).toBe(2);
    expect(style.height).toBe('100%');
  });
});

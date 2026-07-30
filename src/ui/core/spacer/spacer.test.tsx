import React from 'react';
import { render } from '@testing-library/react-native';
import { View } from 'react-native';

import { VajraProvider, defaultVajraTheme } from '../../vajra-theme';
import { Spacer } from './spacer';

const flattenStyle = (style: unknown): Record<string, unknown> => {
  if (Array.isArray(style)) {
    return Object.assign({}, ...style.map(flattenStyle));
  }

  return (style as Record<string, unknown>) ?? {};
};

describe('Spacer', () => {
  it('renders without crashing', () => {
    const { UNSAFE_getByType } = render(
      <VajraProvider>
        <Spacer />
      </VajraProvider>,
    );

    expect(UNSAFE_getByType(View)).toBeTruthy();
  });

  it('resolves w and h spacing tokens to theme values', () => {
    const { UNSAFE_getByType } = render(
      <VajraProvider>
        <Spacer w="s-6" h="s-4" />
      </VajraProvider>,
    );

    const style = flattenStyle(UNSAFE_getByType(View).props.style);

    expect(style.width).toBe(defaultVajraTheme.light.spacing['s-6']);
    expect(style.height).toBe(defaultVajraTheme.light.spacing['s-4']);
  });
});

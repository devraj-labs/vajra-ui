import React from 'react';
import { render } from '@testing-library/react-native';
import { ActivityIndicator } from 'react-native';

import { VajraProvider, defaultVajraTheme } from '../../vajra-theme';
import { Spinner } from './spinner';

describe('Spinner', () => {
  it('renders an ActivityIndicator', () => {
    const { UNSAFE_getByType } = render(
      <VajraProvider>
        <Spinner />
      </VajraProvider>,
    );

    expect(UNSAFE_getByType(ActivityIndicator)).toBeTruthy();
  });

  it('defaults to the theme primary color', () => {
    const { UNSAFE_getByType } = render(
      <VajraProvider>
        <Spinner />
      </VajraProvider>,
    );

    expect(UNSAFE_getByType(ActivityIndicator).props.color).toBe(
      defaultVajraTheme.light.colors.primary,
    );
  });

  it('resolves a custom color token to the theme value', () => {
    const { UNSAFE_getByType } = render(
      <VajraProvider>
        <Spinner color="error" />
      </VajraProvider>,
    );

    expect(UNSAFE_getByType(ActivityIndicator).props.color).toBe(
      defaultVajraTheme.light.colors.error,
    );
  });
});

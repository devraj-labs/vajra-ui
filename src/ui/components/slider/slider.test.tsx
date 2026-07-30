import React from 'react';
import { render, screen } from '@testing-library/react-native';

import { VajraProvider, defaultVajraTheme } from '../../vajra-theme';
import { Slider } from './slider';

const flattenStyle = (style: unknown): Record<string, unknown> => {
  if (Array.isArray(style)) {
    return Object.assign({}, ...style.map(flattenStyle));
  }

  return (style as Record<string, unknown>) ?? {};
};

describe('Slider', () => {
  it('sets accessibilityValue from value/min/max', () => {
    render(
      <VajraProvider>
        <Slider value={40} min={0} max={100} onChange={() => {}} testID="slider" />
      </VajraProvider>,
    );

    expect(screen.getByTestId('slider-thumb').props.accessibilityValue).toEqual({
      min: 0,
      max: 100,
      now: 40,
    });
  });

  it('resolves thumbColor to the theme color on the thumb', () => {
    render(
      <VajraProvider>
        <Slider value={40} onChange={() => {}} thumbColor="success" testID="slider" />
      </VajraProvider>,
    );

    const style = flattenStyle(screen.getByTestId('slider-thumb').props.style);

    expect(style.backgroundColor).toBe(defaultVajraTheme.light.colors.success);
  });

  it('does not allow the pan responder to start when disabled', () => {
    render(
      <VajraProvider>
        <Slider value={40} onChange={() => {}} isDisabled testID="slider" />
      </VajraProvider>,
    );

    const thumb = screen.getByTestId('slider-thumb');

    expect(thumb.props.onStartShouldSetResponder()).toBe(false);
  });

  it('allows the pan responder to start when not disabled', () => {
    render(
      <VajraProvider>
        <Slider value={40} onChange={() => {}} testID="slider" />
      </VajraProvider>,
    );

    const thumb = screen.getByTestId('slider-thumb');

    expect(thumb.props.onStartShouldSetResponder()).toBe(true);
  });
});

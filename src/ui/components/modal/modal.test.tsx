import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import { Animated, Text as RNText } from 'react-native';

import { VajraProvider, defaultVajraTheme } from '../../vajra-theme';
import { Modal } from './modal';

// Modal fades its backdrop via Animated.timing with useNativeDriver: true. The
// installed react-native / react-test-renderer combo in this test environment
// has a native-driver renderer version mismatch that throws when that native
// connection is attempted. Stubbing `start` keeps the animation a no-op
// during tests without touching any component or infra source (same pattern
// used in icon-switch.test.tsx).
jest.spyOn(Animated, 'timing').mockReturnValue({
  start: () => {},
  stop: () => {},
  reset: () => {},
} as unknown as Animated.CompositeAnimation);

const flattenStyle = (style: unknown): Record<string, unknown> => {
  if (Array.isArray(style)) {
    return Object.assign({}, ...style.map(flattenStyle));
  }

  return (style as Record<string, unknown>) ?? {};
};

describe('Modal', () => {
  it('renders its children when visible', () => {
    render(
      <VajraProvider>
        <Modal isVisible onClose={() => {}}>
          <RNText>Modal content</RNText>
        </Modal>
      </VajraProvider>,
    );

    expect(screen.getByText('Modal content')).toBeTruthy();
  });

  it('does not render its content when not visible', () => {
    render(
      <VajraProvider>
        <Modal isVisible={false} onClose={() => {}}>
          <RNText>Modal content</RNText>
        </Modal>
      </VajraProvider>,
    );

    expect(screen.queryByText('Modal content')).toBeNull();
  });

  it('calls onClose when the backdrop is pressed by default', () => {
    const onClose = jest.fn();

    render(
      <VajraProvider>
        <Modal isVisible onClose={onClose} testID="modal">
          <RNText>Modal content</RNText>
        </Modal>
      </VajraProvider>,
    );

    fireEvent.press(screen.getByTestId('modal-backdrop'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('does not call onClose on backdrop press when closeOnBackdropPress is false', () => {
    const onClose = jest.fn();

    render(
      <VajraProvider>
        <Modal isVisible onClose={onClose} closeOnBackdropPress={false} testID="modal">
          <RNText>Modal content</RNText>
        </Modal>
      </VajraProvider>,
    );

    fireEvent.press(screen.getByTestId('modal-backdrop'));
    expect(onClose).not.toHaveBeenCalled();
  });

  it('resolves the content background to the theme surface color by default', () => {
    render(
      <VajraProvider>
        <Modal isVisible onClose={() => {}} testID="modal">
          <RNText>Modal content</RNText>
        </Modal>
      </VajraProvider>,
    );

    const style = flattenStyle(screen.getByTestId('modal-content').props.style);

    expect(style.backgroundColor).toBe(defaultVajraTheme.light.colors.surface);
  });
});

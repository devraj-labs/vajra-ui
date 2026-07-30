import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import { Animated, Text as RNText } from 'react-native';

import { VajraProvider } from '../../vajra-theme';
import { Sheet } from './sheet';

// Sheet composes Modal (backdrop fade via Animated.timing) and its own drag
// handle (Animated.spring on release). Both use useNativeDriver: true, which
// the installed react-native / react-test-renderer combo can't connect to in
// this test environment. Stub both, same pattern as icon-switch.test.tsx and
// modal.test.tsx.
jest.spyOn(Animated, 'timing').mockReturnValue({
  start: () => {},
  stop: () => {},
  reset: () => {},
} as unknown as Animated.CompositeAnimation);
jest.spyOn(Animated, 'spring').mockReturnValue({
  start: () => {},
  stop: () => {},
  reset: () => {},
} as unknown as Animated.CompositeAnimation);

describe('Sheet', () => {
  it('renders its children when visible', () => {
    render(
      <VajraProvider>
        <Sheet isVisible onClose={() => {}}>
          <RNText>Sheet content</RNText>
        </Sheet>
      </VajraProvider>,
    );

    expect(screen.getByText('Sheet content')).toBeTruthy();
  });

  it('does not render its content when not visible', () => {
    render(
      <VajraProvider>
        <Sheet isVisible={false} onClose={() => {}}>
          <RNText>Sheet content</RNText>
        </Sheet>
      </VajraProvider>,
    );

    expect(screen.queryByText('Sheet content')).toBeNull();
  });

  it('calls onClose when the backdrop is pressed by default', () => {
    const onClose = jest.fn();

    render(
      <VajraProvider>
        <Sheet isVisible onClose={onClose} testID="sheet">
          <RNText>Sheet content</RNText>
        </Sheet>
      </VajraProvider>,
    );

    fireEvent.press(screen.getByTestId('sheet-backdrop'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('does not call onClose on backdrop press when closeOnBackdropPress is false', () => {
    const onClose = jest.fn();

    render(
      <VajraProvider>
        <Sheet isVisible onClose={onClose} closeOnBackdropPress={false} testID="sheet">
          <RNText>Sheet content</RNText>
        </Sheet>
      </VajraProvider>,
    );

    fireEvent.press(screen.getByTestId('sheet-backdrop'));
    expect(onClose).not.toHaveBeenCalled();
  });
});

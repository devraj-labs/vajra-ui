import React, { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import { Animated, Text as RNText, View } from 'react-native';

import { VajraProvider } from '../../vajra-theme';
import { Accordion } from './accordion';

// AccordionItem animates its collapsed/expanded height via Animated.timing
// (useNativeDriver: false, since height can't be natively driven — but the
// same test-environment mismatch affects both native and JS-driven
// animations here). Stub it, same pattern used across this repo's other
// Animated-driven components.
jest.spyOn(Animated, 'timing').mockReturnValue({
  start: () => {},
  stop: () => {},
  reset: () => {},
} as unknown as Animated.CompositeAnimation);

const Controlled = ({ allowMultiple = false }: { allowMultiple?: boolean }) => {
  const [openValues, setOpenValues] = useState<string[]>([]);

  return (
    <Accordion.Root openValues={openValues} onChange={setOpenValues} allowMultiple={allowMultiple}>
      <Accordion.Item value="a" title="Section A" testID="item-a">
        <RNText>Content A</RNText>
      </Accordion.Item>
      <Accordion.Item value="b" title="Section B" testID="item-b">
        <RNText>Content B</RNText>
      </Accordion.Item>
    </Accordion.Root>
  );
};

describe('Accordion', () => {
  it('renders all item titles', () => {
    render(
      <VajraProvider>
        <Controlled />
      </VajraProvider>,
    );

    expect(screen.getByText('Section A')).toBeTruthy();
    expect(screen.getByText('Section B')).toBeTruthy();
  });

  it('always renders item content in the tree (height-animated, not conditionally rendered)', () => {
    render(
      <VajraProvider>
        <Controlled />
      </VajraProvider>,
    );

    expect(screen.getByText('Content A')).toBeTruthy();
  });

  it('opening one item closes the other by default (single-open)', () => {
    render(
      <VajraProvider>
        <Controlled />
      </VajraProvider>,
    );

    const itemA = screen.getByTestId('item-a');
    const itemB = screen.getByTestId('item-b');

    fireEvent.press(itemA);
    expect(itemA.props.accessibilityState.expanded).toBe(true);

    fireEvent.press(itemB);
    expect(itemA.props.accessibilityState.expanded).toBe(false);
    expect(itemB.props.accessibilityState.expanded).toBe(true);
  });

  it('allows multiple items open when allowMultiple is true', () => {
    render(
      <VajraProvider>
        <Controlled allowMultiple />
      </VajraProvider>,
    );

    const itemA = screen.getByTestId('item-a');
    const itemB = screen.getByTestId('item-b');

    fireEvent.press(itemA);
    fireEvent.press(itemB);

    expect(itemA.props.accessibilityState.expanded).toBe(true);
    expect(itemB.props.accessibilityState.expanded).toBe(true);
  });

  it('pressing an open item closes it', () => {
    render(
      <VajraProvider>
        <Controlled />
      </VajraProvider>,
    );

    const itemA = screen.getByTestId('item-a');

    fireEvent.press(itemA);
    expect(itemA.props.accessibilityState.expanded).toBe(true);

    fireEvent.press(itemA);
    expect(itemA.props.accessibilityState.expanded).toBe(false);
  });

  it('renders a custom icon instead of the default ▲/▼ glyph when provided', () => {
    const CustomIcon = () => <View testID="custom-accordion-icon" />;

    const WithIcon = () => {
      const [openValues, setOpenValues] = useState<string[]>([]);

      return (
        <Accordion.Root openValues={openValues} onChange={setOpenValues}>
          <Accordion.Item value="a" title="Section A" testID="item-a" icon={CustomIcon}>
            <RNText>Content A</RNText>
          </Accordion.Item>
        </Accordion.Root>
      );
    };

    render(
      <VajraProvider>
        <WithIcon />
      </VajraProvider>,
    );

    expect(screen.getByTestId('custom-accordion-icon')).toBeTruthy();
    expect(screen.queryByText('▼')).toBeNull();
  });

  it('does not toggle when disabled', () => {
    const Disabled = () => {
      const [openValues, setOpenValues] = useState<string[]>([]);

      return (
        <Accordion.Root openValues={openValues} onChange={setOpenValues}>
          <Accordion.Item value="a" title="Section A" testID="item-a" isDisabled>
            <RNText>Content A</RNText>
          </Accordion.Item>
        </Accordion.Root>
      );
    };

    render(
      <VajraProvider>
        <Disabled />
      </VajraProvider>,
    );

    const itemA = screen.getByTestId('item-a');

    fireEvent.press(itemA);

    expect(itemA.props.accessibilityState.expanded).toBe(false);
  });
});

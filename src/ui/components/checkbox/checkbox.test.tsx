import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import { View } from 'react-native';

import { VajraProvider, defaultVajraTheme } from '../../vajra-theme';
import { Checkbox } from './checkbox';

const flattenStyle = (style: unknown): Record<string, unknown> => {
  if (Array.isArray(style)) {
    return Object.assign({}, ...style.map(flattenStyle));
  }

  return (style as Record<string, unknown>) ?? {};
};

describe('Checkbox', () => {
  it('renders labels for each item', () => {
    render(
      <VajraProvider>
        <Checkbox.Root values={[]} onChange={() => {}}>
          <Checkbox.Item value="a" label="Option A" />
          <Checkbox.Item value="b" label="Option B" />
        </Checkbox.Root>
      </VajraProvider>,
    );

    expect(screen.getByText('Option A')).toBeTruthy();
    expect(screen.getByText('Option B')).toBeTruthy();
  });

  it('calls onChange adding the value when an unselected item is pressed', () => {
    const onChange = jest.fn();

    render(
      <VajraProvider>
        <Checkbox.Root values={['a']} onChange={onChange}>
          <Checkbox.Item value="a" label="Option A" />
          <Checkbox.Item value="b" label="Option B" />
        </Checkbox.Root>
      </VajraProvider>,
    );

    fireEvent.press(screen.getByText('Option B'));
    expect(onChange).toHaveBeenCalledWith(['a', 'b']);
  });

  it('calls onChange removing the value when a selected item is pressed', () => {
    const onChange = jest.fn();

    render(
      <VajraProvider>
        <Checkbox.Root values={['a', 'b']} onChange={onChange}>
          <Checkbox.Item value="a" label="Option A" />
          <Checkbox.Item value="b" label="Option B" />
        </Checkbox.Root>
      </VajraProvider>,
    );

    fireEvent.press(screen.getByText('Option A'));
    expect(onChange).toHaveBeenCalledWith(['b']);
  });

  it('shows a checkmark and resolves the selected color for a selected item', () => {
    render(
      <VajraProvider>
        <Checkbox.Root values={['a']} onChange={() => {}} color="error">
          <Checkbox.Item value="a" label="Option A" />
        </Checkbox.Root>
      </VajraProvider>,
    );

    expect(screen.getByText('✓')).toBeTruthy();
  });

  it('renders a custom icon instead of the default checkmark when provided', () => {
    const CustomIcon = ({
      color,
    }: {
      size: number;
      width: number;
      height: number;
      color: string;
    }) => <View testID="custom-check-icon" style={{ backgroundColor: color }} />;

    render(
      <VajraProvider>
        <Checkbox.Root values={['a']} onChange={() => {}} icon={CustomIcon}>
          <Checkbox.Item value="a" label="Option A" />
        </Checkbox.Root>
      </VajraProvider>,
    );

    expect(screen.getByTestId('custom-check-icon')).toBeTruthy();
    expect(screen.queryByText('✓')).toBeNull();
  });

  it('does not call onChange when the root is disabled', () => {
    const onChange = jest.fn();

    render(
      <VajraProvider>
        <Checkbox.Root values={[]} onChange={onChange} isDisabled>
          <Checkbox.Item value="a" label="Option A" />
        </Checkbox.Root>
      </VajraProvider>,
    );

    fireEvent.press(screen.getByText('Option A'));
    expect(onChange).not.toHaveBeenCalled();
  });

  it('resolves the selected indicator background to the root color token via composed usage', () => {
    const { UNSAFE_getAllByType } = render(
      <VajraProvider>
        <Checkbox.Root values={['a']} onChange={() => {}} color="error">
          <Checkbox.Item value="a" label="Option A" />
        </Checkbox.Root>
      </VajraProvider>,
    );

    // The Checkbox.Indicator renders as a Center (Box) wrapping the checkmark;
    // find the View whose resolved background matches the selected color.
    const views = UNSAFE_getAllByType(View);
    const indicatorView = views.find(
      view =>
        flattenStyle(view.props.style).backgroundColor === defaultVajraTheme.light.colors.error,
    );

    expect(indicatorView).toBeTruthy();
  });
});

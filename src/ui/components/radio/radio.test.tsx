import React from 'react';
import { View } from 'react-native';
import { render, screen, fireEvent } from '@testing-library/react-native';

import { VajraProvider, defaultVajraTheme } from '../../vajra-theme';
import { Radio } from './radio';

const flattenStyle = (style: unknown): Record<string, unknown> => {
  if (Array.isArray(style)) {
    return Object.assign({}, ...style.map(flattenStyle));
  }

  return (style as Record<string, unknown>) ?? {};
};

describe('Radio', () => {
  it('renders labels for each item', () => {
    render(
      <VajraProvider>
        <Radio.Root value="a" onChange={() => {}}>
          <Radio.Item value="a" label="Option A" />
          <Radio.Item value="b" label="Option B" />
        </Radio.Root>
      </VajraProvider>,
    );

    expect(screen.getByText('Option A')).toBeTruthy();
    expect(screen.getByText('Option B')).toBeTruthy();
  });

  it('calls onChange with the pressed item value', () => {
    const onChange = jest.fn();

    render(
      <VajraProvider>
        <Radio.Root value="a" onChange={onChange}>
          <Radio.Item value="a" label="Option A" />
          <Radio.Item value="b" label="Option B" />
        </Radio.Root>
      </VajraProvider>,
    );

    fireEvent.press(screen.getByText('Option B'));
    expect(onChange).toHaveBeenCalledWith('b');
  });

  it('does not call onChange when the root is disabled', () => {
    const onChange = jest.fn();

    render(
      <VajraProvider>
        <Radio.Root value="a" onChange={onChange} isDisabled>
          <Radio.Item value="a" label="Option A" />
          <Radio.Item value="b" label="Option B" />
        </Radio.Root>
      </VajraProvider>,
    );

    fireEvent.press(screen.getByText('Option B'));
    expect(onChange).not.toHaveBeenCalled();
  });

  it('does not call onChange for an individually disabled item even if root is enabled', () => {
    const onChange = jest.fn();

    render(
      <VajraProvider>
        <Radio.Root value="a" onChange={onChange}>
          <Radio.Item value="a" label="Option A" />
          <Radio.Item value="b" label="Option B" isDisabled />
        </Radio.Root>
      </VajraProvider>,
    );

    fireEvent.press(screen.getByText('Option B'));
    expect(onChange).not.toHaveBeenCalled();
  });

  it('resolves the selected dot background to the root color token', () => {
    const { UNSAFE_getAllByType } = render(
      <VajraProvider>
        <Radio.Root value="a" onChange={() => {}} color="error">
          <Radio.Item value="a" label="Option A" />
        </Radio.Root>
      </VajraProvider>,
    );

    const views = UNSAFE_getAllByType(View);
    const dot = views.find(
      view =>
        flattenStyle(view.props.style).backgroundColor === defaultVajraTheme.light.colors.error,
    );

    expect(dot).toBeTruthy();
  });
});

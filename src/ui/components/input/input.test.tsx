import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import { View } from 'react-native';

import { VajraProvider, defaultVajraTheme } from '../../vajra-theme';
import { Input } from './input';

const flattenStyle = (style: unknown): Record<string, unknown> => {
  if (Array.isArray(style)) {
    return Object.assign({}, ...style.map(flattenStyle));
  }

  return (style as Record<string, unknown>) ?? {};
};

describe('Input.Outline', () => {
  it('renders label, placeholder, and helper text', () => {
    render(
      <VajraProvider>
        <Input.Outline
          label="Email"
          placeholder="you@example.com"
          helperText="We will not spam you"
        />
      </VajraProvider>,
    );

    expect(screen.getByText('Email')).toBeTruthy();
    expect(screen.getByPlaceholderText('you@example.com')).toBeTruthy();
    expect(screen.getByText('We will not spam you')).toBeTruthy();
  });

  it('calls onChangeText when text is entered', () => {
    const onChangeText = jest.fn();

    render(
      <VajraProvider>
        <Input.Outline testID="field" onChangeText={onChangeText} />
      </VajraProvider>,
    );

    fireEvent.changeText(screen.getByTestId('field'), 'hello@vajra.dev');
    expect(onChangeText).toHaveBeenCalledWith('hello@vajra.dev');
  });

  it('shows errorText instead of helperText when isInvalid, colored with theme error', () => {
    render(
      <VajraProvider>
        <Input.Outline
          label="Email"
          helperText="We will not spam you"
          errorText="Email is required"
          isInvalid
        />
      </VajraProvider>,
    );

    expect(screen.getByText('Email is required')).toBeTruthy();
    expect(screen.queryByText('We will not spam you')).toBeNull();

    const errorStyle = flattenStyle(screen.getByText('Email is required').props.style);

    expect(errorStyle.color).toBe(defaultVajraTheme.light.colors.error);
  });

  it('resolves the container border color to error when invalid', () => {
    const { UNSAFE_getAllByType } = render(
      <VajraProvider>
        <Input.Outline testID="field" isInvalid errorText="Required" />
      </VajraProvider>,
    );
    const views = UNSAFE_getAllByType(View);
    const container = views.find(
      v => flattenStyle(v.props.style).borderColor === defaultVajraTheme.light.colors.error,
    );

    expect(container).toBeTruthy();
  });

  it('is not editable when isDisabled', () => {
    render(
      <VajraProvider>
        <Input.Outline testID="field" isDisabled />
      </VajraProvider>,
    );

    expect(screen.getByTestId('field').props.editable).toBe(false);
  });
});

describe('Input.Filled', () => {
  it('renders and resolves container bg to surfaceSunken', () => {
    const { UNSAFE_getAllByType } = render(
      <VajraProvider>
        <Input.Filled testID="field" placeholder="Search" />
      </VajraProvider>,
    );
    const views = UNSAFE_getAllByType(View);
    const container = views.find(
      v =>
        flattenStyle(v.props.style).backgroundColor ===
        defaultVajraTheme.light.colors.surfaceSunken,
    );

    expect(container).toBeTruthy();
    expect(screen.getByPlaceholderText('Search')).toBeTruthy();
  });
});

describe('Input.Flushed', () => {
  it('renders with no visible label when label is omitted', () => {
    render(
      <VajraProvider>
        <Input.Flushed testID="field" placeholder="Name" />
      </VajraProvider>,
    );

    expect(screen.getByPlaceholderText('Name')).toBeTruthy();
  });
});

describe('Input.Floating', () => {
  it('renders the floating label text and accepts input', () => {
    const onChangeText = jest.fn();

    render(
      <VajraProvider>
        <Input.Floating testID="field" label="Username" onChangeText={onChangeText} />
      </VajraProvider>,
    );

    expect(screen.getByText('Username')).toBeTruthy();
    fireEvent.changeText(screen.getByTestId('field'), 'vajra');
    expect(onChangeText).toHaveBeenCalledWith('vajra');
  });
});

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';

import { VajraProvider } from '../../vajra-theme';
import { Stepper } from './stepper';

describe('Stepper', () => {
  it('renders the current value', () => {
    render(
      <VajraProvider>
        <Stepper value={5} onChange={() => {}} />
      </VajraProvider>,
    );

    expect(screen.getByText('5')).toBeTruthy();
  });

  it('calls onChange with value + step when the increment button is pressed', () => {
    const onChange = jest.fn();

    render(
      <VajraProvider>
        <Stepper value={5} onChange={onChange} testID="stepper" />
      </VajraProvider>,
    );

    fireEvent.press(screen.getByTestId('stepper-increment'));
    expect(onChange).toHaveBeenCalledWith(6);
  });

  it('calls onChange with value - step when the decrement button is pressed', () => {
    const onChange = jest.fn();

    render(
      <VajraProvider>
        <Stepper value={5} onChange={onChange} testID="stepper" />
      </VajraProvider>,
    );

    fireEvent.press(screen.getByTestId('stepper-decrement'));
    expect(onChange).toHaveBeenCalledWith(4);
  });

  it('respects a custom step', () => {
    const onChange = jest.fn();

    render(
      <VajraProvider>
        <Stepper value={10} onChange={onChange} step={5} testID="stepper" />
      </VajraProvider>,
    );

    fireEvent.press(screen.getByTestId('stepper-increment'));
    expect(onChange).toHaveBeenCalledWith(15);
  });

  it('does not call onChange when incrementing past max', () => {
    const onChange = jest.fn();

    render(
      <VajraProvider>
        <Stepper value={10} onChange={onChange} max={10} testID="stepper" />
      </VajraProvider>,
    );

    fireEvent.press(screen.getByTestId('stepper-increment'));
    expect(onChange).not.toHaveBeenCalled();
  });

  it('does not call onChange when decrementing past min', () => {
    const onChange = jest.fn();

    render(
      <VajraProvider>
        <Stepper value={0} onChange={onChange} min={0} testID="stepper" />
      </VajraProvider>,
    );

    fireEvent.press(screen.getByTestId('stepper-decrement'));
    expect(onChange).not.toHaveBeenCalled();
  });

  it('does not call onChange when disabled', () => {
    const onChange = jest.fn();

    render(
      <VajraProvider>
        <Stepper value={5} onChange={onChange} isDisabled testID="stepper" />
      </VajraProvider>,
    );

    fireEvent.press(screen.getByTestId('stepper-increment'));
    fireEvent.press(screen.getByTestId('stepper-decrement'));

    expect(onChange).not.toHaveBeenCalled();
  });
});

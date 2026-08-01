import React, { useState } from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react-native';
import { PanResponder } from 'react-native';

import { VajraProvider, defaultVajraTheme } from '../../vajra-theme';
import { Slider } from './slider';

type TPanResponderConfig = Parameters<typeof PanResponder.create>[0];

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

  it('does not compound the drag delta across multiple move events', () => {
    // Regression test: onPanResponderMove previously recomputed its start
    // position from the current `value` prop on every move event, while
    // gesture.dx is cumulative since the drag started — so once `value`
    // updated from the first move, the second move's (startX derived from
    // the new value) + (full cumulative dx) compounded, racing the thumb
    // to min/max after a couple of moves instead of tracking the pointer.
    //
    // PanResponder.create is only ever CALLED once per render, but its
    // return value is memoized via useRef and only the very first call's
    // result is actually wired up as the live event handlers — later
    // renders' calls happen (react-native always evaluates useRef's
    // argument) but are discarded. Capture only the first call here, or
    // this test silently exercises a config that was never actually
    // attached to anything.
    let config: TPanResponderConfig | undefined;
    let callCount = 0;
    jest.spyOn(PanResponder, 'create').mockImplementation(c => {
      callCount += 1;
      if (callCount === 1) config = c;

      return { panHandlers: {} };
    });

    const values: number[] = [];

    const ControlledSlider = () => {
      const [value, setValue] = useState(40);

      return (
        <Slider
          value={value}
          min={0}
          max={100}
          thumbSize={20}
          testID="slider"
          onChange={next => {
            values.push(next);
            setValue(next);
          }}
        />
      );
    };

    render(
      <VajraProvider>
        <ControlledSlider />
      </VajraProvider>,
    );

    const trackWidth = 200; // usableWidth = 180

    fireEvent(screen.getByTestId('slider'), 'layout', {
      nativeEvent: { layout: { width: trackWidth, height: 20, x: 0, y: 0 } },
    });

    const gestureState = { dx: 0 } as Parameters<
      NonNullable<TPanResponderConfig['onPanResponderMove']>
    >[1];

    act(() => {
      config?.onPanResponderGrant?.({} as never, gestureState);
    });

    // Two small, separate move events with a growing cumulative dx (as real
    // PanResponder gesture state behaves) should move the thumb smoothly,
    // not compound into a jump toward an extreme.
    act(() => {
      gestureState.dx = 10;
      config?.onPanResponderMove?.({} as never, gestureState);
    });

    act(() => {
      gestureState.dx = 20;
      config?.onPanResponderMove?.({} as never, gestureState);
    });

    const [firstValue, secondValue] = values;

    // A 10px move on a 180px usable track spanning 0-100 should move the
    // value by roughly (10/180)*100 ≈ 5.6 — not jump to the max (which is
    // what both a compounding-delta bug and a stale-trackWidth-closure bug
    // independently produce, since either one inflates the effective ratio
    // to 1 almost immediately).
    expect(firstValue).toBeGreaterThan(40);
    expect(firstValue).toBeLessThan(50);
    expect(secondValue).toBeGreaterThan(firstValue);
    expect(secondValue).toBeLessThan(55);
    expect(secondValue - firstValue).toBeLessThan(10);

    jest.restoreAllMocks();
  });

  it('uses the real measured track width for drag math, not the width at mount time', () => {
    // Regression test: PanResponder.create's config closure is captured once
    // via useRef and never recreated. If its callbacks read trackWidth from
    // a plain closure variable instead of a ref, they'd permanently see the
    // value trackWidth had at the FIRST render (0, before onLayout ever
    // fires) — making usableWidth collapse to 1 and any drag jump straight
    // to min/max regardless of how far the pointer actually moved.
    //
    // As above: only the first PanResponder.create call's result is ever
    // actually wired up (useRef discards subsequent calls' return values),
    // so the test must use that one specifically, not just "whichever call
    // happened most recently."
    let config: TPanResponderConfig | undefined;
    let callCount = 0;
    jest.spyOn(PanResponder, 'create').mockImplementation(c => {
      callCount += 1;
      if (callCount === 1) config = c;

      return { panHandlers: {} };
    });

    const onChange = jest.fn();

    render(
      <VajraProvider>
        <Slider value={0} min={0} max={100} thumbSize={20} onChange={onChange} testID="slider" />
      </VajraProvider>,
    );

    // Layout fires after mount, same as it always does in real usage — the
    // panResponder ref was already created with trackWidth=0 at that point.
    fireEvent(screen.getByTestId('slider'), 'layout', {
      nativeEvent: { layout: { width: 200, height: 20, x: 0, y: 0 } },
    });

    const gestureState = { dx: 0 } as Parameters<
      NonNullable<TPanResponderConfig['onPanResponderMove']>
    >[1];

    act(() => {
      config?.onPanResponderGrant?.({} as never, gestureState);
    });

    act(() => {
      gestureState.dx = 9; // 9px of a 180px usable track spanning 0-100
      config?.onPanResponderMove?.({} as never, gestureState);
    });

    // ~5, not 100 (which is what usableWidth=1 would produce for any dx > 1).
    expect(onChange).toHaveBeenLastCalledWith(5);

    jest.restoreAllMocks();
  });
});

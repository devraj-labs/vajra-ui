import { clamp, snapToStep } from './slider-utils';

describe('clamp', () => {
  it('returns the value unchanged when within range', () => {
    expect(clamp(50, 0, 100)).toBe(50);
  });

  it('clamps to min when below range', () => {
    expect(clamp(-10, 0, 100)).toBe(0);
  });

  it('clamps to max when above range', () => {
    expect(clamp(150, 0, 100)).toBe(100);
  });
});

describe('snapToStep', () => {
  it('snaps to the nearest step', () => {
    expect(snapToStep(23, 0, 10)).toBe(20);
    expect(snapToStep(27, 0, 10)).toBe(30);
  });

  it('accounts for a non-zero min when snapping', () => {
    expect(snapToStep(24, 5, 10)).toBe(25);
  });

  it('returns the value unchanged when step is 0', () => {
    expect(snapToStep(23.7, 0, 0)).toBe(23.7);
  });
});

import { defaultVajraTheme } from './vajra-theme';

describe('defaultVajraTheme', () => {
  it.each(['light', 'dark'] as const)(
    '%s theme has a structurally sound shape with all token groups',
    scheme => {
      const theme = defaultVajraTheme[scheme];

      expect(theme.colors).toBeTruthy();
      expect(theme.spacing).toBeTruthy();
      expect(theme.rounded).toBeTruthy();
      expect(theme.typography).toBeTruthy();
      expect(theme.fontSizes).toBeTruthy();
      expect(theme.lineHeights).toBeTruthy();
      expect(theme.layout).toBeTruthy();
      expect(theme.toast).toBeTruthy();
      expect(theme.alert).toBeTruthy();
    },
  );

  it('defaults toast and alert maxVisible to 3', () => {
    expect(defaultVajraTheme.light.toast.maxVisible).toBe(3);
    expect(defaultVajraTheme.light.alert.maxVisible).toBe(3);
    expect(defaultVajraTheme.dark.toast.maxVisible).toBe(3);
    expect(defaultVajraTheme.dark.alert.maxVisible).toBe(3);
  });

  it('light and dark share the same static (non-color) tokens by reference', () => {
    expect(defaultVajraTheme.light.spacing).toBe(defaultVajraTheme.dark.spacing);
    expect(defaultVajraTheme.light.rounded).toBe(defaultVajraTheme.dark.rounded);
    expect(defaultVajraTheme.light.typography).toBe(defaultVajraTheme.dark.typography);
    expect(defaultVajraTheme.light.toast).toBe(defaultVajraTheme.dark.toast);
    expect(defaultVajraTheme.light.alert).toBe(defaultVajraTheme.dark.alert);
  });

  it('light and dark expose the same set of color token keys', () => {
    const lightKeys = Object.keys(defaultVajraTheme.light.colors).sort();
    const darkKeys = Object.keys(defaultVajraTheme.dark.colors).sort();

    expect(darkKeys).toEqual(lightKeys);
  });

  it('light and dark resolve different values for the primary color', () => {
    expect(defaultVajraTheme.light.colors.primary).not.toBe(defaultVajraTheme.dark.colors.primary);
  });

  it('every typography variant has fontSize, lineHeight, and fontWeight', () => {
    Object.values(defaultVajraTheme.light.typography).forEach(variant => {
      expect(typeof variant.fontSize).toBe('number');
      expect(typeof variant.lineHeight).toBe('number');
      expect(typeof variant.fontWeight).toBe('string');
    });
  });
});

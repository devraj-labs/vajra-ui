/**
 * useVajraTheme
 *
 * Typed hook to access vajra tokens inside any component.
 * Must be used within a `VajraProvider`.
 *
 * @example
 * import { useVajraTheme } from 'vajra-ui';
 *
 * const Button = () => {
 *   const theme = useVajraTheme();
 *
 *   return (
 *     <Pressable style={{ backgroundColor: theme.colors.primary, padding: theme.spacing.md, borderRadius: theme.rounded.md }}>
 *       <Text style={{ color: theme.colors.onPrimary }}>Click me</Text>
 *     </Pressable>
 *   );
 * };
 */
import { useTheme } from '../../theme';
import { TVajraThemeWithFonts, TFontFamilies } from './create-vajra-theme';

export type TVajraTheme = TVajraThemeWithFonts<TFontFamilies>;

export const useVajraTheme = (): TVajraTheme => useTheme<TVajraTheme>();

import { plusFonts } from '@devraj-labs/rn-font-jakaratasans';
import { manropeFonts } from '@devraj-labs/rn-font-manrope';
import { newsreaderFonts } from '@devraj-labs/rn-font-newsreader';
import { createVajraTheme } from 'vajra-ui';

const appFonts = {
  ...plusFonts,
  ...manropeFonts,
  ...newsreaderFonts,
};

export const theme = createVajraTheme({
  fonts: appFonts,
});

export type TAppFonts = keyof typeof appFonts;

declare module 'vajra-ui' {
  interface IVajraFonts extends Record<TAppFonts, true> {}
}

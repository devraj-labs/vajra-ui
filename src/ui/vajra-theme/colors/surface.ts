import { colorPrimitives } from '../primitives/colors';

export const surfaceLight = {
  // Background scale
  backgroundSunken: colorPrimitives.gray50,
  background: colorPrimitives.white,
  backgroundRaised: colorPrimitives.gray100,

  // Surface scale
  surfaceSunken: colorPrimitives.gray50,
  surface: colorPrimitives.gray100,
  surfaceRaised: colorPrimitives.gray200,
  surfaceOverlay: colorPrimitives.gray300,

  // Overlay
  overlayLight: 'rgba(0,0,0,0.2)',
  overlay: colorPrimitives.blackAlpha40,
  overlayStrong: 'rgba(0,0,0,0.7)',
};

export const surfaceDark = {
  // Background scale
  backgroundSunken: colorPrimitives.black,
  background: colorPrimitives.gray900,
  backgroundRaised: colorPrimitives.gray800,

  // Surface scale
  surfaceSunken: colorPrimitives.black,
  surface: colorPrimitives.gray800,
  surfaceRaised: colorPrimitives.gray700,
  surfaceOverlay: colorPrimitives.gray600,

  // Overlay
  overlayLight: 'rgba(0,0,0,0.2)',
  overlay: colorPrimitives.blackAlpha40,
  overlayStrong: 'rgba(0,0,0,0.7)',
};

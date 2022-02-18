import { MeshBasicMaterial, Color, DoubleSide } from 'https://cdn.skypack.dev/three';
import { theme } from '../theme.js';

export const basic = {
  opaque: (color) => new MeshBasicMaterial({
    color: new Color(color || theme.primary).convertSRGBToLinear(),
    side: DoubleSide,
  }),
  transparent: (opacity = 0.5) => new MeshBasicMaterial({
    color: new Color(theme.primary).convertSRGBToLinear(),
    side: DoubleSide,
    transparent: true,
    opacity: opacity,
  }),
}
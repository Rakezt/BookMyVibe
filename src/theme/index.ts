import { createTheme } from '@mui/material/styles';

import { palette } from './palette';
import { typography } from './typography';
import { components } from './component-overrides';
import { gradients } from './gradients';
import { customShadows } from './shadows';
import { customTransitions } from './transitions';
import { shape } from './shape';

export const bookMyVibeTheme = createTheme({
  palette,
  typography,
  components,
  shape: {
    borderRadius: shape.borderRadius,
  },
  custom: {
    gradients,

    shadows: customShadows,

    transitions: customTransitions,

    shape: {
      radius: shape.radius,
    },
  },
});

import { createTheme } from '@mui/material/styles';
import { palette } from './palette';
import { typography } from './typography';
import { components } from './components';

export const bookMyVibeTheme = createTheme({
  palette: {
    mode: 'dark',
    ...palette,
  },
  typography,
  components,
  shape: {
    borderRadius: 12,
  },
});

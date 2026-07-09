import { PaletteOptions } from '@mui/material/styles';

export const palette: PaletteOptions = {
  mode: 'light',

  primary: {
    main: '#C75A00',
    light: '#E67E22',
    dark: '#A84A00',
    contrastText: '#FFFFFF',
  },

  secondary: {
    main: '#475569',
    light: '#64748B',
    dark: '#334155',
    contrastText: '#FFFFFF',
  },

  success: {
    main: '#10B981',
  },

  warning: {
    main: '#F59E0B',
  },

  error: {
    main: '#DC2626',
  },

  info: {
    main: '#0284C7',
  },

  background: {
    default: '#F3F4F6',
    paper: '#FFFFFF',
  },

  text: {
    primary: '#1F2937',
    secondary: '#6B7280',
    disabled: '#9CA3AF',
  },

  divider: '#D1D5DB',

  action: {
    hover: 'rgba(199,90,0,.06)',
    selected: 'rgba(199,90,0,.12)',
    disabledBackground: '#E5E7EB',
  },
};

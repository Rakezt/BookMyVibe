import { Components } from '@mui/material/styles';

export const components: Components = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 12,
        padding: '10px 20px',
        fontWeight: 600,
      },
    },
  },

  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 20,
        backgroundColor: '#121A2E',
        border: '1px solid #1E293B',
      },
    },
  },

  MuiPaper: {
    styleOverrides: {
      root: {
        backgroundImage: 'none',
      },
    },
  },

  MuiTextField: {
    defaultProps: {
      variant: 'outlined',
      fullWidth: true,
    },
  },
};

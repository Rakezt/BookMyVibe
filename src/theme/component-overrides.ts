import { Components, Theme } from '@mui/material/styles';

export const components: Components<Theme> = {
  MuiButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: 12,
        padding: '10px 20px',
        fontWeight: 600,
        textTransform: 'none',
        boxShadow: 'none',

        '&:hover': {
          boxShadow: 'none',
        },

        '&.MuiButton-containedPrimary': {
          color: theme.palette.primary.contrastText,
        },
      }),
    },
  },

  MuiCard: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: 20,
        backgroundColor: theme.palette.background.paper,
        border: `1px solid ${theme.palette.divider}`,
        boxShadow: '0 8px 24px rgba(15,23,42,.08)',
      }),
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

  MuiOutlinedInput: {
    styleOverrides: {
      root: ({ theme }) => ({
        background: theme.palette.background.paper,

        '& fieldset': {
          borderColor: theme.palette.divider,
        },

        '&:hover fieldset': {
          borderColor: theme.palette.primary.main,
        },

        '&.Mui-focused fieldset': {
          borderColor: theme.palette.primary.main,
        },
      }),
    },
  },

  MuiAppBar: {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        boxShadow: 'none',
        borderBottom: `1px solid ${theme.palette.divider}`,
      }),
    },
  },

  MuiDivider: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderColor: theme.palette.divider,
      }),
    },
  },

  MuiChip: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: 8,
        fontWeight: 500,
        backgroundColor: theme.palette.action.hover,
      }),
    },
  },
};

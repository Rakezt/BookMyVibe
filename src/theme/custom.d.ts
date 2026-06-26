import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    custom: {
      gradients: {
        primary: string;
        secondary: string;
        surface: string;
      };

      shadows: {
        card: string;
        hover: string;
        dialog: string;
        primary: string;
        cyan: string;
      };

      transitions: {
        fast: string;
        normal: string;
        slow: string;
      };

      shape: {
        radius: {
          xs: number;
          sm: number;
          md: number;
          lg: number;
          xl: number;
          pill: number;
        };
      };
    };
  }

  interface ThemeOptions {
    custom?: Theme['custom'];
  }
}
